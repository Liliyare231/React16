import React from 'react'
import '../catalog/catalog.css'
import { store } from '../../app/store'
import { useState } from 'react'
import Card from '../card/card'
import { useContext } from 'react'
import { AppContext } from '../../App'

export default function Catalog() {
    const [query, setQuery] = useState("")
    const [sorting, setSorting] = useState("")
    const [category, setCategory] = useState(0)
    const {addToCart } = useContext(AppContext)
    function search(e) {
        setQuery(e.target.value)
    }

    const filterdProducts = store.products.filter(
        (item) => item.name.toLowerCase().includes(query.toLowerCase())
            &&
            (item.category == category || category == 0))

    function sort(event) {
        const sortValue = event.target.value
        setSorting(sortValue)
    }
    const sortProduct = (sorting, catalog) => {
        switch (sorting) {
            case 'price_asc':
                return [...catalog].sort((a, b) => a.price - b.price)
            case 'price_desc':
                return [...catalog].sort((a, b) => b.price - a.price)
            case 'ost_asc':
                return [...catalog].sort((a, b) => a.ost - b.ost)
            case 'ost_desc':
                return [...catalog].sort((a, b) => b.ost - a.ost)
            default:
                return catalog

        }
    }

    const sortAndFilterProduct = sortProduct(sorting, filterdProducts)

    return (

        <div className="catalog">
            <div className="catalog-content">
                <div className="sortings">
                    <div className="cort">
                        <input onChange={search} type="search" name="search" className='search' placeholder='Поиск' />
                        <select onChange={sort}>
                            <option value="price_asc">По возрастанию цены</option>
                            <option value="price_desc">По убыванию цены</option>
                            <option value="ost_asc">По возрастанию количества остатка</option>
                            <option value="ost_desc">По убыванию количества отсатка</option>
                        </select>

                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="butn_sort">
                        <button onClick={() => setCategory(0)}>Все категории</button>
                        <button onClick={() => setCategory(1)}>Куртки и рубашки</button>
                        <button onClick={() => setCategory(2)}>Брюки и носки</button>
                        <button onClick={() => setCategory(3)}>на букву "Ы"</button>
                    </div>
                </div>
                <div className="pagin">
                    <a href="" className='paginA'>Главная</a> \
                    <a href="" className='paginA'>Каталог</a>
                </div>

                <div className="catalog-inform">
                    {/* <div className="catalog-menu">
                        <a href="" className="menu-link">Всё</a>
                        <a href="" className="menu-link">Топ</a>
                        <a href="" className="menu-link">Низ</a>
                        <a href="" className="menu-link">Обувь</a>
                    </div> */}





                    <div className="catalog-inform-blog">

                        <div className="catalog-blog">
                            {
                                sortAndFilterProduct.length ?
                                    sortAndFilterProduct.map((card, index) => {
                                        return (
                                            <Card key={index} {...card} addCard={addToCart} />

                                        )
                                    })
                                    :
                                    <h2>по запросу "{query}" ничего не найдено</h2>
                            }
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
    )

}

