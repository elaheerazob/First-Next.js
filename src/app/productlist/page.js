"use client"
import { useEffect, useState } from "react";

const productList = () => {
    const [products,setProducts] =useState([]);
    useEffect(async () =>{
       let data =await fetch('https://dummyjson.com/products');
       data=await data.json();
        console.log(data);
        setProducts(data.products)
    },[]);
    return (
        <div>
            <h2>TotalProducts: {products.length}</h2>
            {
                products.map((product)=> (
                    <h2>Name:{product.title}</h2>
                ))
            }
        </div>
    );
};

export default productList;