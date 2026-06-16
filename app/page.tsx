import Image from "next/image";

import CloudImg from "@/public/img/Cloud.jpg";
export default function Home() {
  return (
    <>
        <main className="min-h-screen flex  items-center p-80 text-center justify-center gap-4 bg-linear-to-br from-purple-900/40 to-transparent">
          <Image loading="eager" src={CloudImg} alt="Beninoonet Logo" width={200} height={200} className="mb-4 rounded-3xl" />
        <div className="flex flex-col items-center justify-center gap-2 bg-white/20 dark:bg-black/20 p-8 rounded-3xl shadow-lg backdrop-blur-md">
        <h1 className="text-4xl font-bold text-purple-800 text-center">@beninoonet</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 w-100 text-center">
          Je tente des expériences avec VSCode, je lance des lives avec OBS et je partage mes aventures sur les réseaux.
          </p>
        </div>
      </main>
    </>
  );
}
