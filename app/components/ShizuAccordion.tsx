"use client";

import { useState } from "react";
import { GoChevronDown } from "react-icons/go";



const ShizuFaqs = [
    {
        question: "Pourquoi rejoindre le Discord Shizuka ?",
        answer: "Un endroit calme et respectueux pour discuter, partager et se détendre. Vous pouvez y trouver des discussions sur divers sujets, des événements communautaires et un espace pour se faire de nouveaux amis."
    },
    {
        question: "Il y a un âge minimum pour rejoindre le Discord Shizuka ?",
        answer: "Oui, le Discord Shizuka est destiné aux personnes âgées de 13 ans et plus, conformément aux directives de Discord."
    },
    {
        question: "Une équipe de modération est-elle présente sur le Discord Shizuka ?",
        answer: "Nous recrutons actuellement des modérateurs pour assurer un environnement sûr et agréable pour tous les membres. Si vous êtes intéressé, veuillez nous contacter via le Discord."
    },
    {
        question: "Comment puis-je rejoindre le Discord Shizuka ?",
        answer: "Pour rejoindre le Discord Shizuka, cliquez sur le lien d'invitation disponible sur notre site web ou recherchez 'Shizuka' dans l'application Discord et cliquez sur 'Rejoindre'."
    }
]

export default function ShizuAccordion({ items = ShizuFaqs }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <div className="w-full max-w-2xl mx-auto divide-y divide-gray-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
 
        return (
          <div key={index} className="py-1 bg-gray-100/70 dark:bg-gray-800 rounded-lg mb-2 shadow-lg backdrop-blur-2xl">
            <button
              id={buttonId}
              onClick={() => toggleAccordion(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex lg:w-full items-center justify-between gap-4 py-4 px-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded"
            >
              <span className="font-medium text-gray-900">{item.question}</span>
              <GoChevronDown
                aria-hidden="true"
                className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
 
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-4 px-2 text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    )
}