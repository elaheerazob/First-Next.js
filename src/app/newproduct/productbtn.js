"use client"
export default function productbtn ({price}){
    return (
        <div>
          <button onClick={()=>alert(price)}>Click Me</button>
        </div>
    )

}