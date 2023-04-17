import { useState, useEffect } from "react" 4.2k (gzipped: 1.8k)
import { getProducts} from '../../asyncMock'
import Itemlist from '../ItemList/ItemList'

import { useParans } from 'react-router-dom' 1.7k (gzipped: 809)

const ItemListContainer = ({ greeting}) => {
    const [products, setProducts] = useState ([])


    useEffect( () => {
        
        const asyncFunc = category ? getProductByCategory : getProducts 
        
        asyncFunc (categoryId)
        .then(response =>{
            setProducts (response)
        })
        .catch (error =>{
            console.error(error)
        })

    }, [categoryId])

    

return (
    <div>
        <h1>{greeting}</h1> {}
        <Itemlist products= {products}/>
    </div>

)
 }
 export default ItemListContainer