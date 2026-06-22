
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
                Hina est un bot discord <a href="#fonction" className="font-bold text-purple-500 underline">multifonctions</a>, 
                capable de proposer un <b>système musical </b> avec un sons clair et des commandes simples,
                Une gestion d&apos;annonce Twitch avec un système de <b>notification </b> pour les streamers,
                et un système d&apos;interactions entre membres de votre serveur.
            </p>
            <h2 className="font-medium text-white uppercase mt-3 underline" id="fonction">Listes des fonctionnalités</h2>
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
                <li className=" mt-2 items-center gap-2">
                    <div className="bg-white/80 inline-flex items-center rounded-lg p-1 py-5 px-10 gap-2 flex-col">
                    <div className="inline-flex items-center gap-2">
                        <RxCheckCircled color="green" size={24} />
                    <h3 className="font-semibold text-lg">Système Twitch</h3></div>
                    <p className="lg:w-130 w-80">
                        Le système Twitch de Hina permet de gérer les annonces de vos streamers préférés,
                        avec un <b>système de notification</b> pour les membres de votre serveur. Et grâce à la <b> base de données de Hina</b>, 
                        chaque annonce est indépendante sur chaque serveur.
                    </p>
                    </div>
                </li>
                <li className=" mt-2 items-center gap-2">
                    <div className="bg-white/80 inline-flex items-center rounded-lg p-1 py-5 px-10 gap-2 flex-col">
                    <div className="inline-flex items-center gap-2">
                        <RxCheckCircled color="green" size={24} />
                    <h3 className="font-semibold text-lg">Système d&apos;interaction</h3></div>
                    <p className="lg:w-130 w-80">
                        Actuellement le système d&apos;interaction de Hina est disponible uniquement avec quelques interactions comme le <b>câlin</b> mais d&apos;autres interactions sont en cours de développement.
                    </p>
                    </div>
                </li>
                <li className=" mt-2 items-center gap-2">
                    <div className="bg-white/80 inline-flex items-center rounded-lg p-1 py-5 px-10 gap-2 flex-col">
                    <div className="inline-flex items-center gap-2">
                        <RxCrossCircled color="red" size={24} />
                    <h3 className="font-semibold text-lg">Système de modération</h3></div>
                    <p className="lg:w-130 w-80">
                        Actuellement indisponible, 
                        le système de modération de Hina est 
                        en cours de développement. 
                        Il permettra aux administrateurs 
                        de <b>gérer les membres</b>, <b>gérer les rôles </b> et bien d&apos;autre choses sur les serveur avec des 
                        commandes simples et efficaces.
                    </p>
                    </div>
                </li>
                <li className=" mt-2 items-center gap-2">
                    <div className="bg-white/80 inline-flex items-center rounded-lg p-1 py-5 px-10 gap-2 flex-col">
                    <div className="inline-flex items-center gap-2">
                        <IoReloadCircle color="orange" size={24} />
                    <h3 className="font-semibold text-lg">Système de confession</h3></div>
                    <p className="lg:w-130 w-80">
                        Le système de confession de Hina est partiellement disponible,
                        il permet de créer un embed de <b>confession</b> accompagné de 2 (deux) boutons faire des confessions de manière <b>anonyme ou non</b>. Lors 
                        de la création d&apos;une confession, le message est envoyé et pour éviter le spam de message, un <b>système de fil public</b> est créer.
                         
                    </p>
                    </div>
                </li>
            </ul>
        </div>
    )

}