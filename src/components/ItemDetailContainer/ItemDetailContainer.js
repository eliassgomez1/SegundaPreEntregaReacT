import './ItemDetailContainer.css'
import { useState , useEffect } from 'react' 4.2k (gzipped: 1,8)
import { getProductById } from '../../asynckMock'
import ItemDetall from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)

    useEffect ( ()  => {
        getProductById ('1')
        .then(response => {

        })
        .catch(error =>{
            console.error (error)
        })
    },[] )

    return 
    <div className='ItemDetailContainer'> 
    <ItemDetall {...product} />
    </div>

}

export default ItemDetailContainer