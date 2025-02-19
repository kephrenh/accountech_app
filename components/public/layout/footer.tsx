import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">AccounTech</h2>
            <p className="mt-2 text-sm text-gray-400">
              Simplifiez votre comptabilité avec notre solution tout-en-un. Générez et partagez vos
              rapports financiers en toute simplicité.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/" className="hover:text-indigo-400 transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-indigo-400 transition">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-indigo-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold text-white">Suivez-nous</h3>
            <div className="mt-2 flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-indigo-400 transition">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-indigo-400 transition">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-indigo-400 transition">
                <FaLinkedin size={24} />
              </Link>
              <Link href="https://instagram.com" className="hover:text-indigo-400 transition">
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright & Mentions légales */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AccounTech. Tous droits réservés.</p>
          <p>
            <Link href="/mentions-legales" className="hover:text-indigo-400 transition">
              Mentions légales
            </Link>{" "}
            |{" "}
            <Link href="/confidentialite" className="hover:text-indigo-400 transition">
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
