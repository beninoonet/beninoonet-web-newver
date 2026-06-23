"use client";

import Link from "next/link";

import { FaTwitch, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiKofi } from "react-icons/si";

export default function HomeActionBtn() {
  return (
    <div className="flex flex-row items-center justify-center ">
        {/* Projects CTA */}
      <Link 
      href="https://www.twitch.tv/beninoonet" 
      target="_blank" 
      className="flex items-center px-2 text-zinc-500 py-2 hover:text-zinc-600 dark:text-zinc-300 dark:hover:text-white hover:scale-[0.90] transition-all duration-200">
        <FaTwitch size={24}/>
      </Link>
        {/* Twitter CTA */}
        <Link href="https://x.com/beninoonet" target="_blank"  className="flex items-center px-2 text-zinc-500 py-2 hover:text-zinc-600 hover:scale-[0.90] dark:text-zinc-300 dark:hover:text-white transition-all duration-200">
        <FaTwitter size={24}/>
      </Link>
      {/* Instagram CTA */}
        <Link href="https://x.com/beninoonet" target="_blank"  className="flex items-center px-2 text-zinc-500 py-2 hover:text-zinc-600 hover:scale-[0.90] dark:text-zinc-300 dark:hover:text-white transition-all duration-200">
        <FaInstagram size={24}/>
      </Link>
      {/* Youtube CTA */}
        <Link href="https://www.youtube.com/@beninoonet" target="_blank"  className="flex items-center px-2 text-zinc-500 py-2 hover:text-zinc-600 hover:scale-[0.90] dark:text-zinc-300 dark:hover:text-white transition-all duration-200">
        <FaYoutube size={24}/>
      </Link>
      {/* Contact CTA */}
      <Link href="mailto:contact@beninoonet.fr" className="flex items-center px-2 text-zinc-500 py-2 hover:scale-[0.90] hover:text-zinc-600 dark:text-zinc-300 dark:hover:text-white transition-all duration-200">
        <MdEmail size={24}/>
      </Link>
      {/* Kofi CTA */}
      <Link href="https://ko-fi.com/beninoonet" className="flex items-center px-2 text-zinc-500 py-2 hover:scale-[0.90] hover:text-zinc-600 dark:text-zinc-300 dark:hover:text-white transition-all duration-200">
        <SiKofi size={24}/>
      </Link>
    </div>
  );
}