export const handleVerificationError = (errorMessage: string): string => {
  switch (errorMessage) {
    case "TOKEN_EXPIRED":
      return "Le lien de vérification a expiré. Veuillez demander un nouvel e-mail.";
    case "INVALID_TOKEN":
      return "Le lien de vérification est invalide. Assurez-vous d'utiliser le bon lien.";
    case "USER_NOT_FOUND":
      return "Aucun utilisateur correspondant n'a été trouvé.";
    case "ALREADY_VERIFIED":
      return "Votre email est déjà vérifié ! Redirection...";
    default:
      return "Une erreur inconnue est survenue. Veuillez réessayer.";
  }
};
