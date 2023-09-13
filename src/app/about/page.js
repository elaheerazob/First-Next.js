'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';


const page = () => {
    const route = useRouter();
    return (
        <div>
            <h1>About</h1>
            <button onClick={()=>route.push("/")}>Home</button>

            <br/>

          <Link href="/about/aboutCollage">Go to AboutCollage</Link><br /> <br />
          <Link href="/about/aboutStudents">Go to AboutStudents</Link>
        </div>
    );
};

export default page;