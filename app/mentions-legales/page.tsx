import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales & Politique de confidentialité — Beninoonet",
  description:
    "Mentions légales et politique de confidentialité du portfolio Beninoonet, incluant la page de recrutement Shizuka.",
};

// ── Placeholder ──────────────────────────────────────────────────────────────
// Repère visuel : tout ce qui est encadré en violet dans la page est à remplacer
// par vos vraies informations avant publication.
function Fill({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[#974cc9] underline underline-offset-4 decoration-dotted">
      {children}
    </span>
  );
}

// ── Bloc de section ──────────────────────────────────────────────────────────
function Article({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-6 border-b border-[#2e2c29] last:border-none">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="text-[#582fa5] text-xs tracking-widest uppercase shrink-0">
          {n}
        </span>
        <h3 className="text-[#f5f0e8] text-lg font-semibold">{title}</h3>
      </div>
      <div className="text-[#bdb9b2] text-sm leading-relaxed space-y-3 pl-0 sm:pl-9">
        {children}
      </div>
    </div>
  );
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[#221d24] px-4 py-16 sm:py-20 font-sans">
      <div className="w-full max-w-3xl mx-auto">
        {/* En-tête */}
        <div className="mb-10">
          <p className="text-[#9e9a94] text-xs tracking-widest uppercase mb-3">
            Informations légales
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#f5f0e8] leading-tight">
            Mentions légales &amp; Politique de confidentialité
          </h1>
          <div className="mt-4 h-px w-16 bg-[#582fa5]" />
          <p className="mt-4 text-[#9e9a94] text-sm leading-relaxed">
            Le présent document s&rsquo;applique à l&rsquo;ensemble du site{" "}
            <strong className="text-[#f5f0e8]">Beninoonet</strong>, portfolio
            personnel — y compris au bouton de soutien Ko-fi présent dans le
            menu principal, et à la page{" "}
            <strong className="text-[#f5f0e8]">Shizuka</strong> et son
            formulaire de recrutement.
          </p>
        </div>

        {/* Navigation rapide */}
        <nav className="flex flex-wrap gap-2 mb-12">
          <a
            href="#mentions-legales"
            className="px-4 py-2 rounded-sm text-xs uppercase tracking-widest border border-[#2e2c29] text-[#9e9a94] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
          >
            Mentions légales
          </a>
          <a
            href="#confidentialite"
            className="px-4 py-2 rounded-sm text-xs uppercase tracking-widest border border-[#2e2c29] text-[#9e9a94] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
          >
            Politique de confidentialité
          </a>
        </nav>

        {/* ── MENTIONS LÉGALES ──────────────────────────────────────── */}
        <section id="mentions-legales" className="mb-16 scroll-mt-8">
          <h2 className="text-2xl font-bold text-[#f5f0e8] mb-1">
            Mentions légales
          </h2>
          <p className="text-[#9e9a94] text-sm mb-6">
            Conformément à la loi n° 2004-575 du 21 juin 2004 pour la
            confiance en l&rsquo;économie numérique (LCEN).
          </p>

          <Article n="01" title="Éditeur du site">
            <p>
              Le présent site est édité par <Fill>Beninoonet</Fill>,
              agissant à titre non professionnel.
            </p>
            <p>
              Contact : <Fill>contact@beninoonet.fr</Fill>
            </p>
            <p>
              Conformément à l&rsquo;article 6-III de la LCEN, en
              l&rsquo;absence d&rsquo;activité professionnelle, les
              coordonnées complètes de l&rsquo;éditeur ne sont pas rendues
              publiques mais restent à la disposition des autorités
              compétentes, via l&rsquo;hébergeur du site.
            </p>
          </Article>

          <Article n="02" title="Hébergement">
            <p>
              Le site est hébergé par la société Vercel Inc., 340 S Lemon
              Ave #4133, Walnut, CA 91789, États-Unis.{" "}
              <a
                href="https://vercel.com"
                className="text-[#c9a84c] hover:underline"
              >
                vercel.com
              </a>{" "}
              — contact :{" "}
              <a
                href="mailto:privacy@vercel.com"
                className="text-[#c9a84c] hover:underline"
              >
                privacy@vercel.com
              </a>
              .
            </p>
            <p>
              Le nom de domaine est enregistré auprès de LWS,{" "}
              <a
                href="https://www.lws.fr"
                className="text-[#c9a84c] hover:underline"
              >
                lws.fr
              </a>
              , registrar français accrédité (Afnic, ICANN).
            </p>
          </Article>

          <Article n="03" title="Propriété intellectuelle">
            <p>
              L&rsquo;ensemble des contenus présents sur ce site (textes,
              visuels, charte graphique) est protégé par le droit
              d&rsquo;auteur. Toute reproduction sans autorisation préalable
              est interdite.
            </p>
            <p>
              La photo de profil utilisée sur ce site a été réalisée par{" "}
            <Fill><a href="https://www.instagram.com/annika.sunlight" target="_blank">Annika.Sunlight</a></Fill>.
              Tous droits sur cette œuvre sont réservés à son auteure ;
              toute reprise ou réutilisation est soumise à son autorisation
              préalable.
            </p>
            <p>
              Discord et les autres marques éventuellement citées
              appartiennent à leurs propriétaires respectifs ; leur mention
              ne saurait constituer un partenariat officiel.
            </p>
          </Article>

          <Article n="04" title="Services tiers">
            <p>Ce site fait appel aux services tiers suivants :</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong className="text-[#f5f0e8]">Discord</strong> — utilisé
                spécifiquement par la page Shizuka : gestion de la
                communauté du serveur et réception des candidatures envoyées
                via le formulaire de recrutement.
              </li>
              <li>
                <strong className="text-[#f5f0e8]">Ko-fi</strong> — un
                bouton présent dans le menu principal du site, visible sur
                l&rsquo;ensemble des pages (et non uniquement sur la page
                Shizuka), redirige vers la page Ko-fi du serveur Shizuka
                pour permettre les dons volontaires. Il ne s&rsquo;agit pas
                d&rsquo;un widget intégré à ce site : en cliquant, vous
                quittez ce site pour effectuer un don directement sur la
                plateforme Ko-fi, indépendante, qui applique sa propre
                politique de confidentialité. Ce site n&rsquo;a accès à
                aucune donnée de paiement.
              </li>
            </ul>
          </Article>

          <Article n="05" title="Limitation de responsabilité">
            <p>
              L&rsquo;éditeur s&rsquo;efforce d&rsquo;assurer
              l&rsquo;exactitude des informations diffusées sur ce site, sans
              garantie absolue, et ne saurait être tenu responsable des
              erreurs, omissions, ou d&rsquo;une indisponibilité temporaire
              du service.
            </p>
          </Article>
        </section>

        {/* ── POLITIQUE DE CONFIDENTIALITÉ ──────────────────────────── */}
        <section id="confidentialite" className="scroll-mt-8">
          <h2 className="text-2xl font-bold text-[#f5f0e8] mb-1">
            Politique de confidentialité
          </h2>
          <p className="text-[#9e9a94] text-sm mb-6">
            Conformément au Règlement général sur la protection des données
            (RGPD).
          </p>

          <Article n="01" title="Données collectées">
            <p>
              Le formulaire de recrutement présent sur la page Shizuka de ce
              portfolio collecte les données suivantes : pseudo Discord,
              poste souhaité, disponibilité, message de motivation, et
              expérience en modération ou en gestion de communauté.
            </p>
          </Article>

          <Article n="02" title="Finalité du traitement">
            <p>
              Ces données sont utilisées exclusivement pour évaluer votre
              candidature au sein de l&rsquo;équipe du serveur Discord
              Shizuka. Elles ne sont utilisées à aucune autre fin, et ne
              concernent en rien le reste du portfolio Beninoonet.
            </p>
          </Article>

          <Article n="03" title="Base légale">
            <p>
              Le traitement repose sur votre consentement, exprimé librement
              par l&rsquo;envoi volontaire du formulaire. Vous pouvez
              retirer ce consentement à tout moment en nous contactant.
            </p>
          </Article>

          <Article n="04" title="Destinataires des données">
            <p>
              Les données transmises depuis la page Shizuka sont envoyées,
              via une intégration technique (webhook), vers un salon Discord
              privé accessible uniquement à l&rsquo;équipe
              d&rsquo;administration et de modération du serveur Shizuka.
              Aucune donnée n&rsquo;est vendue, louée, ou partagée avec des
              tiers à des fins commerciales.
            </p>
          </Article>

          <Article n="05" title="Durée de conservation">
            <p>
              Les candidatures sont conservées le temps nécessaire au
              traitement du recrutement, puis supprimées dans un délai de{" "}
              <Fill>3 mois</Fill>, sauf si vous rejoignez
              l&rsquo;équipe — auquel cas certaines informations peuvent être
              conservées pour la durée de votre engagement.
            </p>
          </Article>

          <Article n="06" title="Sécurité des données">
            <p>
              La connexion entre votre navigateur et ce site est chiffrée
              (HTTPS). Les données transitent ensuite vers Discord, qui
              applique sa propre politique de sécurité et de confidentialité.
            </p>
          </Article>

          <Article n="07" title="Vos droits">
            <p>
              Conformément au RGPD, vous disposez d&rsquo;un droit
              d&rsquo;accès, de rectification, d&rsquo;effacement et
              d&rsquo;opposition concernant vos données personnelles. Pour
              exercer ces droits, contactez :{" "}
              <Fill>contact@beninoonet.fr</Fill>.
            </p>
            <p>
              Vous pouvez également introduire une réclamation auprès de la
              CNIL :{" "}
              <a
                href="https://www.cnil.fr"
                className="text-[#c9a84c] hover:underline"
              >
                www.cnil.fr
              </a>
              .
            </p>
          </Article>

          <Article n="08" title="Cookies">
            <p>
              Ce site ne dépose lui-même aucun cookie lié à Ko-fi : le
              bouton présent dans le menu se contente de rediriger vers la
              plateforme Ko-fi, sans widget intégré. Une fois sur le site
              Ko-fi, des cookies peuvent y être déposés conformément à sa
              propre politique de confidentialité, indépendante de celle de
              ce portfolio.
            </p>
            <p>
              Ce site n&rsquo;utilise par ailleurs aucun cookie de mesure
              d&rsquo;audience ou publicitaire.
            </p>
          </Article>

          <Article n="09" title="Contact">
            <p>
              Pour toute question relative à vos données personnelles ou à
              cette politique : <Fill>contact@beninoonet.fr</Fill>.
            </p>
          </Article>
        </section>

        {/* Pied */}
        <p className="text-[#6b6862] text-xs mt-12 pt-6 border-t border-[#2e2c29]">
          Dernière mise à jour : <Fill>23/06/2026</Fill>
        </p>
      </div>
    </div>
  );
}