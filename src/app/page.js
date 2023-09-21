'use client'

import Link from "next/link";
import { useRouter } from "next/navigation"

export default function Home() {
  const router =useRouter();

  const nevation =(name)=>{
    router.push(name)
  }

  return (
    <main>
 <h1>npm run dev</h1>
<button onClick={()=>nevation("/login")}>Login</button>
<button onClick={()=>nevation("/about")}>About</button>
<Link  href="/about" >About</Link>
<Link href="/productlist">Product List</Link>
    </main>
  )
}

