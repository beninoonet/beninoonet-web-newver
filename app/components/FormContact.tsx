"use client";
"use no memo";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

// ── Schéma Zod ──────────────────────────────────────────────────────────────
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères"),
  age: z.string().min(1, "Veuillez sélectionner votre âge"),
  motivations: z
    .string()
    .min(20, "Le message doit contenir au moins 20 caractères")
    .max(1000, "Le message ne peut pas dépasser 1000 caractères"),
  xpbtn: z.string().min(1, "Veuillez sélectionner une option"),
  xp: z
    .string()
    .min(0, "Le message doit contenir au moins 20 caractères")
    .max(1000, "Le message ne peut pas dépasser 1000 caractères").optional(),
});



type ContactFormData = z.infer<typeof contactSchema>;


// ── Composant ────────────────────────────────────────────────────────────────
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const xpBtnOptions = [
    { value: "oui", label: "Oui" },
    { value: "non", label: "Non" },
  ];

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      // Remplacez par votre appel API réel
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
        if (!response.ok) {
            throw new Error("Erreur lors de l'envoi du message");
        }
      console.log("Données envoyées :", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  
  return (
    <div className=" bg-[#221d24] flex items-center justify-center px-4 py-16 font-sans">
      <div className="w-full max-w-xl">

        {/* En-tête */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#f5f0e8] leading-tight">
            Votre candidature
          </h1>
          <div className="mt-4 h-px w-16 bg-[#582fa5]" />
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">

          {/* Nom */}
          <div>
            <label className="block text-[#9e9a94] text-xs tracking-widest uppercase mb-2">
              Pseudo discord 
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="beninoonet"
              className={`w-full bg-[#1a1916] text-[#f5f0e8] placeholder-[#4a4845] border px-4 py-3 rounded-sm text-sm outline-none transition-colors focus:border-[#c9a84c] ${
                errors.name ? "border-red-500" : "border-[#2e2c29]"
              }`}
            />
            {errors.name && (
              <p className="mt-1.5 text-red-400 text-xs">{errors.name.message}</p>
            )}
          </div>

          {/* Age */}
          <div>
            <label className="block text-[#9e9a94] text-xs tracking-widest uppercase mb-2">
              Votre âge 
            </label>
             <select
              {...register("age")}
                defaultValue=""
                className={`w-full bg-[#1a1916] text-[#f5f0e8] border px-4 py-3 rounded-sm text-sm outline-none transition-colors focus:border-[#c9a84c] ${
                  errors.age ? "border-red-500" : "border-[#2e2c29]"
                }`}
              >
                <option value="" disabled>
                  Sélectionnez votre âge
                </option>
                <option value="moins de 18 ans">moins de 18 ans</option>
                <option value="18-25 ans">18-25 ans</option>
                <option value="26-30 ans">26-30 ans</option>
                <option value="30 ou plus">31 ou plus</option>

              </select>
            {errors.age && (
              <p className="mt-1.5 text-red-400 text-xs">{errors.age.message}</p>
            )}
          </div>

          {/* Motivation */}
          <div>
            <label className="block text-[#9e9a94] text-xs tracking-widest uppercase mb-2">
              Motivation
            </label>
            <textarea
              {...register("motivations")}
              rows={5}
              placeholder="Décrivez votre demande…"
              className={`w-full bg-[#1a1916] text-[#f5f0e8] placeholder-[#4a4845] border px-4 py-3 rounded-sm text-sm outline-none transition-colors focus:border-[#c9a84c] resize-none ${
                errors.motivations ? "border-red-500" : "border-[#2e2c29]"
              }`}
            />
            {errors.motivations && (
              <p className="mt-1.5 text-red-400 text-xs">{errors.motivations.message}</p>
            )}
          </div>

          {/* Bouton XP */}
          <div>
            <label className="block text-[#9e9a94] text-xs tracking-widest uppercase mb-2">
              Avez-vous de l&apos;expérience en modération ?
            </label>
           
            {xpBtnOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setValue("xpbtn", option.value, { shouldValidate: true })}
                className={`mr-2 mb-2 px-4 py-2 rounded-sm text-sm font-semibold transition-colors ${
                  // eslint-disable-next-line react-hooks/incompatible-library
                  watch("xpbtn") === option.value
                    ? "bg-[#582fa5] text-[#f5f0e8]"
                    : "bg-[#1a1916] text-[#9e9a94] hover:bg-[#2e2c29]"
                }`}
              >
                {option.label}
              </button>
            ))}
            {errors.xpbtn && (
              <p className="mt-1.5 text-red-400 text-xs">{errors.xpbtn.message}</p>
            )}
          </div>
          {/* expériences */}
          <div>
            <label className="block text-[#9e9a94] text-xs tracking-widest uppercase mb-2">
              Si, oui racontez nous une expérience que vous avez eu dans ce domaine.
            </label>
            <textarea
              {...register("xp")}
              rows={5}
              placeholder="Décrivez votre demande…"
              className={`w-full bg-[#1a1916] text-[#f5f0e8] placeholder-[#4a4845] border px-4 py-3 rounded-sm text-sm outline-none transition-colors focus:border-[#c9a84c] resize-none ${
                errors.xp ? "border-red-500" : "border-[#2e2c29]"
              }`}
            />
            {errors.xp && (
              <p className="mt-1.5 text-red-400 text-xs">{errors.xp.message}</p>
            )}
          </div>

          {/* Bouton */}
          <button
            type="submit"
            disabled={isSubmitting || status === "loading"}
            className="w-full bg-[#591e7a] text-[#ffffff] font-semibold text-sm tracking-widest uppercase py-3.5 rounded-sm transition-opacity hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Envoi en cours…" : "Envoyer"}
          </button>

          {/* Messages de statut */}
          {status === "success" && (
            <div className="border border-[#c9a84c]/30 bg-[#c9a84c]/5 text-[#c9a84c] text-sm px-4 py-3 rounded-sm">
              ✓ Votre candidature à bien été reçu.
            </div>
          )}
          {status === "error" && (
            <div className="border border-red-500/30 bg-red-500/5 text-red-400 text-sm px-4 py-3 rounded-sm">
              ✕ Une erreur est survenue. Veuillez réessayer.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}