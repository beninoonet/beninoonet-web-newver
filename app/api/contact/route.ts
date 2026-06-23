// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(50),
  age: z.string().min(1),
  motivations: z.string().min(20).max(1000),
  xpbtn: z.string().min(1),
  xp: z.string().min(0).max(1000).optional(),
  
});

export async function POST(request: Request) {
    if(!process.env.DISCORD_WEBHOOK_URL) {
        return NextResponse.json({ error: "Webhook URL not configured" }, { status: 500 });
    }
    try {
        const body = await request.json();

        // Validation des données
        const validatedData = contactSchema.safeParse(body);
        if (!validatedData.success) {
            return NextResponse.json({ error: "Données invalides", details: validatedData.error.flatten() }, { status: 400 });
        };

        const { name, age, motivations, xpbtn, xp  } = validatedData.data;

        // Message Discord (Webhook)
        const discordFormattedMessage = {
            username: `${name}`,
            embeds: [
                {
                    title: `📋 - Nouvelle candidature`,
                    description: `Merci d'indiquer avec une réactions si il a été lu ou pas.`,
                    fields: [
                        {
                            name: "👤 - Pseudonyme",
                            value: name,
                            inline: true,
                        },
                        {
                            name: "🎂 - Âge",
                            value: age,
                            inline: true,
                        },
                        {
                            name: "📝 - Expérience en modération",
                            value: xpbtn,
                            inline: true,
                        },
                        {
                            name: "🛠️ - Détails de l'expérience",
                            value: xp ?? "Aucune expérience fournie",
                            inline: false,
                        },
                        {
                            name: "💪 - Motivations",
                            value: motivations,
                            inline: false,
                        },
                    ],

                    color: 0x582fa5,
                    footer: {
                        text: "Formulaire de recrutement - beninoonet.fr",
                    },
                },
            ],
        };

        // Send to Discord Webhook
        const response = await fetch(process.env.DISCORD_WEBHOOK_URL!, {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(discordFormattedMessage),
        });

        if (!response.ok) {
            console.error("Erreur lors de l'envoi au webhook Discord:", await response.text());
            return NextResponse.json({ error: "Erreur lors de l'envoi du message" }, { status: 500 });
        }
        return NextResponse.json({ message: "Message envoyé avec succès" }, { status: 200 });
        
    } catch (error) {
        console.error("Erreur lors du traitement de la requête:", error);
        return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 });
    }
}
