"use client";

import Image from "next/image";
import Link from "next/link";

import { useRef, MouseEvent } from "react";

import HomeActionBtn from "./components/HomeActionBtn";

import { AiFillCaretDown } from "react-icons/ai";
import ProjectComponentBtn from "./components/ProjectComponentBtn";



export default function Home() {
  const cardRef = useRef<HTMLDivElement>(null);

  // GET A AVATAR ON GITHUB


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
      {/* SECTION 1 : Hero, plein écran, flèche collée en bas */}
      <main className="min-h-screen flex flex-col items-center justify-between text-center bg-linear-to-br from-purple-900/40 to-transparent pb-8">
        {/* Spacer pour équilibrer visuellement la flèche du bas */}
        <div className="h-8" />

        <div className="flex-1 flex items-center justify-center w-full">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.12s ease', willChange: 'transform' }}
            className="flex items-center justify-center gap-4 lg:flex-row flex-col bg-white/20 dark:bg-black/20 p-8 rounded-3xl shadow-lg backdrop-blur-md"
          >
            <Image
              loading="eager"
              src="/img/beninoonet.png"
              alt="Beninoonet Logo"
              width={200}
              height={200}
              className="mb-4 rounded-3xl hover:scale-[1.05] hover:shadow-[0_0_16px_4px_rgba(126,94,206,0.6)] grayscale hover:grayscale-0 transition-all duration-200"
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="lg:text-4xl text-3xl font-bold text-purple-500 text-center">
                <Link href="/" className="hover:text-purple-600 transition-all duration-200">
                  @beninoonet
                </Link>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 w-100 text-center">
                Je <b>développe</b> par curiosité et passion, je <b>joue</b> pour décompresser et je <b>streame</b> pour partager mes expériences avec vous.
              </p>
              <HomeActionBtn />
            </div>
          </div>
        </div>

        <Link
          href="#project"
          className="flex flex-col items-center justify-center gap-2 text-purple-500 hover:text-purple-600 transition-all duration-200"
        >
          <AiFillCaretDown className="hover:animate-bounce bg-white/30 rounded-4xl text-purple-500 text-4xl" />
        </Link>
      </main>

      {/* SECTION 2 : Projects */}
      <section
  id="project"
  className="min-h-screen p-4 px-8 py-16 text-center bg-zinc-800">
    <ProjectComponentBtn />

</section>
    </>
  );
}