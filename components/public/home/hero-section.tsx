import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Simplifiez votre comptabilité avec Accoun<span className="text-indigo-600">Tech</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Optimisez vos processus financiers avec notre solution de comptabilité tout-en-un.
            Calculez, générez et partagez vos rapports financiers en toute simplicité.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/auth/register"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Commencer
            </Link>
            <Link href="#features" className="text-sm font-semibold leading-6 text-gray-900">
              En savoir plus <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
