"use client"

import { useState } from "react";

const page = () => {
    const [style,setStyle] = useState({backgroundColor:'red'})
    
    return (
        <div>
            <h2 style={style}>This is color Button changed </h2>
            <button onClick={()=>setStyle({backgroundColor:"green"})}>Click Me</button>
        </div>
    );
};

export default page;