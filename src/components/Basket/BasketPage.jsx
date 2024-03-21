import { useContext } from 'react'
import { AppContext } from '../../App'
import Card from '../card/card'

export default function BasketPage() {

    const { data, addToCart } = useContext(AppContext)
   const items = data.filter(card => card.cart)

    return <div className="catalog_list">
                {
                    <div className="catalog-inform-blog">

                    <div className="catalog-blog">
                        {
                             items.length > 0 ?
                             items.map((card, index) => {
                                 return (
                                     <Card
                                         key={index}
                                         {...card}
                                         addCard={addToCart}
                                     />
                                 )
                             }) 
                                :
                                <h2>здесь ничего нет</h2>
                        }
                    </div>
                </div>
                   
                }
            </div>
}