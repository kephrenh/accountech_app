import { useEffect, useState } from "react";

export const useHandleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname); // Récupère le chemin actuel
  }, []);

  const getLinkClass = (href: string) => {
    return currentPath === href
      ? "inline-flex items-center px-3 pt-1 text-sm font-medium text-indigo-600"
      : "inline-flex items-center px-3 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors duration-200";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isOpen, setIsOpen, getLinkClass };
};
