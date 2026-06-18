
import Image from "next/image";
import { RxCheckCircled } from "react-icons/rx";
import { RxCrossCircled } from "react-icons/rx";
import { IoReloadCircle } from "react-icons/io5";

export default function HinaPage() {
    return (
        <div className="min-h-screen flex flex-col items-center text-center bg-zinc-800 py-12">
            <Image loading="eager" src="/img/hina.webp" alt="Hina" width={300} height={300} className="mt-8 rounded-2xl" />
            <h1 className="text-4xl font-bold text-white mt-3">Hina</h1>
            <p className="text-lg text-gray-300 mt-2 max-w-md">
                Hina est un bot discord <b>multifonctions</b>, 
                capable de proposer un <b>système musical </b> avec un sons clair et des commandes simples,
                Une gestion d&apos;annonce Twitch avec un système de <b>notification </b> pour les streamers,
                et un système d&apos;interactions entre membres de votre serveur.
            </p>
            <h2 className="font-medium text-white uppercase mt-3 underline">Listes des fonctionnalités</h2>
            <p className="text-white inline-flex lg:flex-row text-center flex-col items-center gap-2 mt-2">
                <RxCheckCircled color="green" size={24} /> - Disponible 
                <RxCrossCircled color="red" size={24} /> - Indisponible 
                <IoReloadCircle color="orange" size={24} /> - En cours de développement
            </p>

            <ul>
                <li className=" mt-2 items-center gap-2">
                    <div className="bg-white/80 inline-flex items-center rounded-lg p-1 py-5 px-10 gap-2 flex-col">
                    <div className="inline-flex items-center gap-2"><RxCheckCircled color="green" size={24} />
                    <h3 className="font-semibold text-lg">Système de musique</h3></div>
                    <p className="lg:w-130 w-80">Le système de musique 
                        de Hina est lié à Lavalink qui permet une haute qualité et une stabilité. Avec des commandes simple comme <b>/play </b>,<b>/pause </b>,<b>etc..</b></p>
                    </div>
                    
                </li>
            </ul>
        </div>
    )

}