export const extractErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message; // Erreur typique avec un message
  } else if (typeof error === "string") {
    return error; // Si l'erreur est une chaîne brute
  } else if (typeof error === "object" && error !== null && "message" in error) {
    return String((error as { message: unknown }).message); // Si un objet avec une propriété 'message'
  } else {
    return "Erreur inconnue"; // Autres cas
  }
};
