import RegisterForm from "@/components/auth/register-form";

const RegisterPage = () => {
  return (
    <section className="flex justify-center items-center min-h-screen w-full pt-20 px-4">
      <div className="w-full flex justify-center">
        <RegisterForm />
      </div>
    </section>
  );
};
export default RegisterPage;
