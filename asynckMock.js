const products = [
    {
        id :'1',
        name : 'skate'
        price : 1000,
        category : 'patineta'
        img: 'https://www.labskateboarding.com/wp-content/uploads/2020/06/SKATE-MUSTANG-FULL.jpg'
        stock: 15,
        description: 'Descripcion de skateboard'
    },
    { id: '2', name: 'Hoodie DC', price: 200, category: 'indumentaria' , img: 'https://cdn.shopify.com/s/files/1/0594/7506/7048/products/buzo-dc-star-negro-indy-1.jpg?v=1675389207'}}
 ]
    
    export const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout (() => {
                resolve (products)
            },500 )
        }
     )
 }

 export const getProductById = (products) => {
    return new Promise ( (resolve) =>{
        setTimeout ( () => {
            resolve (products.find(prod => prod.id === prodictId))
        },500) 
    })
 }