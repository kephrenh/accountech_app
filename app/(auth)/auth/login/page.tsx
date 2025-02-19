import { LoginForm } from "@/components/auth/login-form";

const LoginScreen = () => {
  return (
    <section className="flex justify-center items-center min-h-screen w-full pt-20 px-4">
      <div className="w-full flex justify-center">
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginScreen;
