import { Calculator, FileSpreadsheet, FileText, Mail } from "lucide-react";
import FeatureCard from "./feature-card";

const features = [
  {
    name: "Calculateur de Compte de Résultat",
    description:
      "Calculez et analysez facilement vos comptes de résultat avec notre outil intuitif.",
    icon: Calculator,
  },
  {
    name: "Générateur de Bilan",
    description:
      "Créez des bilans complets pour obtenir une vue claire de votre situation financière.",
    icon: FileSpreadsheet,
  },
  {
    name: "Génération de PDF",
    description:
      "Générez des rapports financiers au format PDF d'aspect professionnel en un seul clic.",
    icon: FileText,
  },
  {
    name: "Intégration par Email",
    description:
      "Envoyez vos rapports financiers par email de manière sécurisée directement depuis l'application.",
    icon: Mail,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Fonctionnalités Puissantes
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tout ce dont vous avez besoin pour une comptabilité efficace
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {
              "Notre suite complète d'outils vous aide à gérer vos finances avec précision et simplicité."
            }
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <FeatureCard
                icon={feature.icon}
                key={feature.name}
                name={feature.name}
                description={feature.description}
              />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
