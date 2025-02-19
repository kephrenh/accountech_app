import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = "http://localhost:3000";

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmationLink = `${domain}/auth/verify-email?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Vérifier votre email",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
        <div style="background-color: #4F46E5; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0;">AccounTech</h1>
        </div>
        <div style="padding: 20px; background-color: white;">
          <h2 style="color: #333;">Confirmez votre adresse email</h2>
          <p style="color: #555; line-height: 1.6;">
            Bonjour, <br><br>
            Merci de vous être inscrit sur AccounTech ! Veuillez cliquer sur le bouton ci-dessous pour vérifier votre adresse email.
          </p>
          <div style="text-align: center; margin: 20px 0;">
            <a href="${confirmationLink}" style="background-color: #4F46E5; color: white; text-decoration: none; padding: 12px 20px; border-radius: 5px; display: inline-block; font-size: 16px;">
              Vérifier mon email
            </a>
          </div>
          <p style="color: #555; font-size: 14px;">
            Si le bouton ne fonctionne pas, copiez et collez ce lien dans votre navigateur :
            <br>
            <a href="${confirmationLink}" style="color: #4F46E5;">${confirmationLink}</a>
          </p>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">
            Si vous n'avez pas créé de compte, ignorez simplement cet email.
          </p>
        </div>
        <div style="background-color: #f3f3f3; padding: 10px; text-align: center; font-size: 12px; color: #777; border-radius: 0 0 8px 8px;">
          © ${new Date().getFullYear()} AccounTech. Tous droits réservés.
        </div>
      </div>
    `,
  });
};
