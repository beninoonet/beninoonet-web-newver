"use client";

import Link from "next/link";
import Image from "next/image";

import { AiFillCaretDown } from "react-icons/ai";


export default function ProjectComponentBtn() {
  
  return (
    <div 
    className="flex lg:flex-row flex-col items-center justify-center gap-2 py-10 px-8">
      
      <div className="flex flex-col items-center justify-center gap-2 bg-white/60 p-5 rounded-2xl" >
        <Image src="/img/HinaGOAT.webp" alt="Project Image" width={200} height={200} className="shadow-[-5px_11px_18px_-14px_rgba(0,_0,_0,_0.8)] rounded-xl" />
        <h2 className="font-semibold text-2xl uppercase">Hina</h2>
        <p 
        className="text-gray-800 dark:text-gray-300 text-center max-w-80"
        >
          Hina est un bot discord qui dispose de <b>multiples fonctionnalités</b>,
          Allant de simple interactions entre utilisateurs à de la <b>gestion de musique</b>, en passant par de la gestion de <b>notifications twitch</b>.
          </p>
          <Link href="/hina" className=" text-white text-center p-2 rounded-full lowercase hover:bg-purple-500/70 transition-all duration-200">
          <AiFillCaretDown size={24} />
          </Link>
      </div>

    </div>
  );
}