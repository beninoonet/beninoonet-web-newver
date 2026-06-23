import FormContact from "@/app/components/FormContact";
import Link from "next/link";
export default function Projects() { 
    return (
        <div className="min-h-screen bg-[#221d24] flex flex-col items-center justify-center px-4 py-16 font-sans">
            <div className="w-full max-w-xl">
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-[#f5f0e8] leading-tight">
                        Recrutement
                    </h1>
                    <div className="mt-4 h-px w-16 bg-[#582fa5]" />
                </div>
                <p className="text-[#9e9a94] mb-6">
                    Tu souhaites rejoindre la modération ? Merci à toi de prendre le temps de vouloir améliorer l&apos;ambiance du serveur. 
                    Pour postuler, merci de remplir le formulaire ci-dessous. Nous te répondrons au plus vite en message privé sur Discord. <br />
                    <span className="text-gray-300">Quelques petites indications :</span>
                </p>
                <ul className="text-[#9e9a94] mb-6 list-disc list-inside font-semibold">
                    <li>Vous devez être majeur</li>
                    <li>Le SPAM de formulaire équivaut à un refus <b>IMMEDIAT</b></li>
                    <li>Vous devez être actif sur le discord</li>
                </ul>
                <FormContact />
                
            </div>
            <Link href="/shizuka" className="flex justify-center text-[#9e9a94] hover:text-[#f5f0e8] transition-colors">
                Retour en arrière
                </Link>
        </div>

    );
}