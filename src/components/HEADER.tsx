"use client";
import { useState } from "react"; // Import useState for managing state
import Link from "next/link"; // Import Link from Next.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Correct import for FontAwesomeIcon
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle menu open/close
    };

    return (
        <nav className="flex justify-between items-center h-20 px-20 w-full bg-[#131313] fixed top-0 left-0 z-50">
   <Link href={'/'}>         <h2 className="logo text-4xl font-black text-div ">DF.</h2></Link>

            {/* Desktop menu */}
            <ul className={`hidden md:flex justify-center items-center gap-10 uppercase text-div`}>
            <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/service">Services</Link>
                </li>
                <li>
                    <Link href="/work">Work</Link>
                </li>
              
                
                <li>
                    <Link href={'/contact'}><Button>HIRE ME</Button></Link>
                </li>
            </ul>

            {/* Hamburger icon for mobile view */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-div text-3xl font-extralight bg-transparent">
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-black md:hidden">
                    <ul className="flex flex-col gap-4 py-4 p-10">
                    <li onClick={toggleMenu}>
                            <Link href="/">Home</Link>
                        </li>
                        <li onClick={toggleMenu}>
                            <Link href="/service">Services</Link>
                        </li>
                        <li onClick={toggleMenu}>
                            <Link href="/work">Work</Link>
                        </li>
                        <li onClick={toggleMenu}>
                        <Link href={'/contact'}>HIRE ME</Link>
                        </li>
                    
                    </ul>
                </div>
            )}
        </nav>
    );
}
