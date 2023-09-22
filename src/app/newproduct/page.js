async function newproduct() {
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json();
    return data.products
}


export default async function page() {
    let products = await newproduct();
    console.log('products');
    return (
        <div>
            {
                products.map((items) =>(
                    <div>
                        <h1>Name :{items.title}</h1>
                        <h1>Pice :{items.price}</h1>
                        <img src={items.thumbnail} alt="" />
                    </div>
                ))
            }
        </div>
    )
    
}