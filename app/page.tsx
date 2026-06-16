"use client";

import Image from "next/image";
import Link from "next/link";

import { useRef, MouseEvent } from "react";

import CloudImg from "@/public/img/Cloud.jpg";
import HomeActionBtn from "./components/HomeActionBtn";
export default function Home() {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current
    if (!card) return
    const { left, top, width, height } = card.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5
    card.style.transform = `perspective(600px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) scale(1.02)`
    card.style.setProperty('--gx', `${e.clientX - left}px`)
    card.style.setProperty('--gy', `${e.clientY - top}px`)
  }

  function handleMouseLeave() {
    const card = cardRef.current
    if (!card) return
    card.style.transform = ''
  }

  return (
    <>
        <main className="min-h-screen flex flex-col  items-center  gap-5 text-center justify-center bg-linear-to-br from-purple-900/40 to-transparent">
        <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: 'transform 0.12s ease', willChange: 'transform'
         }}
        className="flex items-center justify-center gap-4 lg:flex-row flex-col bg-white/20 dark:bg-black/20 p-8 rounded-3xl shadow-lg backdrop-blur-md">
          {/* INSERT A IMG TO RECEIVE  */}
          <Image loading="eager" src={CloudImg} alt="Beninoonet Logo" width={200} height={200} className="mb-4 rounded-3xl hover:scale-[1.05] hover:shadow-[0_0_16px_4px_rgba(126,94,206,0.6)] grayscale hover:grayscale-0 transition-all duration-200" />
          <div className="flex flex-col items-center justify-center gap-2  ">
            <h1 className="lg:text-4xl text-3xl font-bold text-purple-500 text-center">
              <Link href="/" className="hover:text-purple-600 transition-all duration-200">
              @beninoonet
              </Link>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 w-100 text-center">
            Je tente des expériences avec <b>VSCode</b>, je lance des lives sur Twitch et je partage mes aventures sur les <b>réseaux</b>.
            </p>
            <HomeActionBtn />
          </div>
        </div>
        <>
        {/* CTA */}
          
        </>
      </main>
    </>
  );
}
