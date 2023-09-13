"use client" 
import Link from "next/link";
import { useRouter } from "next/navigation";
const page = () => {
    const route =useRouter(); 
    const nevation =(p)=>{
        route.push("/login" +p)
    }
    return (
        <div>
           <Link href="/">Go to Home</Link>

           <button onClick={()=>nevation("/loginStudent")}>Student Login</button>
           <br />
           <button onClick={()=>nevation("/loginTeacher")}>Teacher Login</button>

        </div>
    );
}

export default page;