'use client'; // Add this line to mark the file as a client component

import { useState } from 'react'; 
import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
    // State to toggle the mobile menu visibility
    const [isMenuActive, setIsMenuActive] = useState(false);

    // Function to toggle the menu visibility
    const toggleMenu = () => {  
        setIsMenuActive(!isMenuActive);
    };

    return (
        <nav>
            <button className='burger' onClick={toggleMenu}>&#9776;</button> {/* Attach the handler */}
            <menu className={isMenuActive ? "active" : ""}> {/* Conditional class */}
                <li><Link href="/" onClick={toggleMenu}>Home</Link></li> {/* Close menu */}
                <li><Link href="/Students" onClick={toggleMenu}>Students</Link></li> {/* Close menu */}
                <li><Link href="/Staff" onClick={toggleMenu}>Staff</Link></li> {/* Close menu */}
            </menu>
        </nav>
    );
};

export default Navbar;
