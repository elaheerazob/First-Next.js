
async function UserList(){
    let data =await fetch("https://dummyjson.com/products");
    data =await data.json();
    return data.products;
}


export default async function Page(){
    let products= await UserList();
    console.log(products);
    return(
        <div>
            {
                products.map((item)=>(
                    <div key={item.id}>
                        <h1>Name: {item.title}</h1>
                    </div>
                ))
            }
        </div>
    )
}