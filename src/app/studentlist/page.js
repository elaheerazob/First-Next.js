import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <ul>
                <h1>This is Student List</h1>
                <li>
                    <Link href='studentlist/razob'>Razob</Link>
                </li>
                <li>
                <Link href='studentlist/Elahee'>Elahee</Link>
                </li>
                <li>
                <Link href='studentlist/moon'>Moon</Link>
                </li>
            </ul>
        </div>
    );
};

export default page;