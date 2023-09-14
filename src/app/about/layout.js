import Link from "next/link";
import React from "react";
import './about.css';

const layout = ({ children }) => {
  return (
    <div>
       
      <ul className="about-navbar">
      <h2>Main About</h2>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/about/aboutCollage"}>AboutCollage</Link>
        </li>
        <li>
          <Link href={"/about/aboutStudents"}>aboutStudents</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default layout;
