import catalog1 from '../components/catalog/imgCatalog/S035c1162fb30422799044906f5a9d0ecG 10.png'
import catalog2 from '../components/catalog/imgCatalog/S035c1162fb30422799044906f5a9d0ecG 11.png'
import catalog3 from '../components/catalog/imgCatalog/S035c1162fb30422799044906f5a9d0ecG 12.png'

export const store = {
    products:[
        {
            id: 1,
            name:'123Джинсы',
            price:100,
            img: catalog1,
            ost:0,
            category:2,
            cart: false
        },{
            id: 2,
            name:'куртка',
            price: 200,
            img: catalog2,
            ost:1,
            category:1,
            cart: false
        },{
            id: 3,
            name:'ыштаны',
            price:9999,
            img: catalog3,
            ost:1,
            category:3,
            cart: false
        },{
            id: 4,
            name:'носок',
            price:500,
            img: catalog1,
            ost:5,
            category:2,
            cart: false
        },{
            id: 5,
            name:'ышапка',
            price:600,
            img: catalog2,
            ost:0,
            category:3,
            cart: false
        },{
            id: 6,
            name:'рубашка',
            price:50,
            img: catalog3,
            ost:6,
            category:1,
            cart: false
        }

    ]
} 
