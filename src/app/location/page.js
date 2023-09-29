"use client"
import Script from "next/script";
export default function Page (){
    return(
        <div>
            <Script
            src="/location.js"
            onLoad={()=>{
                console.log('File loaded Done');
            }}
            />
            <h1>This is location </h1>
        </div>
    )
}