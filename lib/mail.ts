import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = "http://localhost:3000";

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmationLink = `${domain}/auth/verify-email?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Vérifier votre email",
    html: `<p>Cliquer <a href="${confirmationLink}">ici</a> pour vérifier votre email.</p>`,
  });
};
