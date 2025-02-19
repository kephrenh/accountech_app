"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 overflow-hidden">
      {/* Cercles en arrière-plan */}
      <motion.div
        className="absolute w-96 h-96 bg-indigo-300 opacity-20 rounded-full top-10 left-10 blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-purple-300 opacity-20 rounded-full bottom-10 right-10 blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      />

      {/* Contenu principal */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h1 className="text-6xl font-bold text-indigo-600">404</h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 text-lg text-gray-700">
        {"Oups ! La page que vous cherchez n'existe pas."}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6">
        <Link
          href="/"
          className="rounded-md bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700">
          {"Retour à l'accueil"}
        </Link>
      </motion.div>
    </div>
  );
}
