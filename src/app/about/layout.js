"use client";
import Link from "next/link";
import React from "react";
import "./about.css";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      {pathName !== "/about/aboutStudents" ? (
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
          <li>
            <Link href={"/about/studentList"}>aboutStudentList</Link>
          </li>
        </ul>
      ) : (
        <Link href={'/about'}>back to Main About</Link>
      )}
      {children}
    </div>
  );
};

export default layout;
