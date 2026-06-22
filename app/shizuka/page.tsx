import Image from "next/image";
import Link from "next/link";
import ShizukaAccordion from "../components/ShizuAccordion";
export default function ShizukaPage() {
    return (
        <div className="min-h-screen flex  py-25 justify-center bg-linear-to-br from-[#0f056b]/85 to-[#130c4d]/70">
            <div className="flex flex-col items-center  gap-4">
            <Image src="/img/Shizuka_3.gif" alt="Shizuka Logo" width={300} height={300} className="rounded-3xl shadow-lg" />
            <h1 className="font-bold text-2xl text-gray-200">Shizuka</h1>
            <p className="text-lg font-medium text-zinc-200 w-150">
                Shizuka est un terme japonnais qui signifie <b className="text-blue-300">calme, silencieux </b> 
            et c&apos;est ce nom que j&apos;ai choisi pour le serveur discord. 
            Un endroit calme et respectueux comme une nuit d&apos;été au bord de la mer ou un jour d&apos;automne dans une forêt.
           <b> Bienvenue sur le serveur Shizuka, un endroit pour discuter, partager et se détendre.</b>
            </p>
            <Link href="https://discord.gg/Xq66Zvf4Wb" target="_blank" className="bg-[#0f056b] hover:bg-[#130c4d]/50 text-white font-bold py-3 px-8 rounded-2xl  transition-colors duration-300">
                Rejoindre le Discord Shizuka
            </Link>
            <p className="text-sm text-gray-400 mt-2">
                En rejoignant le serveur, vous acceptez de respecter les règles et de contribuer à maintenir un environnement sûr et agréable pour tous les membres.
            </p>
            <h2 className="font-bold text-xl text-gray-200 mt-6">FAQ</h2>
            <ShizukaAccordion />
            </div>
        </div>
    )
}