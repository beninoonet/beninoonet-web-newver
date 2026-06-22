// navbar with a user icon a right side 
"use client";

// import dependencies
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
// Import icons
import { FaHome, FaDatabase, FaDiscord } from "react-icons/fa";

import { FiMenu } from "react-icons/fi";


// Set a Items for the navbar
const navItems = [
    { 
        name: "Accueil", 
        href: "/",
        icon: <FaHome size={20} className="mr-2" />
    },
    {
        name: "Mes projets",
        href: "#project",
        icon: <FaDatabase size={20} className="mr-2" />,
    },
    {
        name: "Shizuka",
        href: "/shizuka",
        icon: <FaDiscord size={20} className="mr-2" />,
    }

]

// set the navbar component
export default function Navbar() {
    // set the state for the navbar (false = closed, true = open)
    // false is default because the navbar is closes when the page loads
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    
    return (
        // set a Fragment to wrap the navbar and the menu
        <>
        <header className="fixed top-0 left-0 w-full bg-zinc-900 dark:bg-black shadow-md z-20 p-4 flex justify-between items-center ">
            <div className="flex items-center space-x-4">
                {/* Button of Open the navbar */}
                <button onClick={() => setIsOpen(!isOpen)} className="text-white dark:text-white focus:outline-none cursor-pointer">
                    {isOpen ? <FiMenu size={32} /> : <FiMenu size={32} />}
                </button>
                {/* TITLE OF HEADER */}
                <Link href="/" className="text-lg font-bold text-white dark:text-white">
                    <h1>
                        Beninoonet
                    </h1>
                </Link>
            </div>

            {/* NAVIGATION PART */}
            <div className={`flex items-center space-x-4 
                ${isOpen ? "block" : "hidden"} md:flex transition-all duration-300 ease-in-out`}
                onClick={() => setIsOpen(false)}></div>
        </header>
        {/* Overlay */}
        {isOpen && (
            <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={() => setIsOpen(false)}></div>
        )}
         {/* SIDEBAR */}
            <aside className={`fixed z-20 top-0 left-0 h-full w-64 bg-zinc-200 dark:bg-black shadow-lg transform
                ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
                
                {/* DIV TO TEXT AND CROSS */}
                <div className="flex items-center p-4 bg-zinc-900 dark:bg-black">
                    <button onClick={() => setIsOpen(false)} className="text-white dark:text-white focus:outline-none cursor-pointer">
                        <FiMenu size={32} />
                    </button>
                    <h2 className="text-lg font-bold pl-2 text-white dark:text-white">Beninoonet</h2>
                </div>

                {/* Nav */}
               <nav className="flex flex-col gap-1">
    {navItems.map((item) => (
        <Link
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`relative flex uppercase items-center gap-3 w-full px-4 py-3 font-medium
                transition-all duration-300 ease-in-out
                text-gray-800 dark:text-gray-300
                hover:text-gray-900 dark:hover:text-white
                hover:bg-linear-to-l hover:from-purple-900/40 hover:to-transparent
                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1
                before:bg-purple-500 before:opacity-0 before:transition-opacity before:duration-300
                hover:before:opacity-100
                ${pathname === item.href
                    ? "text-gray-600 bg-linear-to-l from-purple-900/40 to-transparent before:opacity-100"
                    : ""
                }`}
        >
            {item.icon}
            {item.name}
        </Link>
    ))}
</nav>
            </aside>
        </>
    )
}