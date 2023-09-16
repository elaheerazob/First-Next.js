import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1>This is Teacher List</h1>

            <ul>
                <li>
                    <Link href='/teacherlist/454'>Link-1</Link>
                </li>
                <li>
                    <Link href='/teacherlist/link2'>Link-2</Link>
                </li>
                <li>
                    <Link href='/teacherlist/link3'>Link-3</Link>
                </li>
            </ul>
        </div>
    );
};

export default page;