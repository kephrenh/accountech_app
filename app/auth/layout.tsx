const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,_#f0f0f0_1px,_transparent_1px),linear-gradient(to_bottom,_#f0f0f0_1px,_transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="h-screen flex items-center justify-center">{children}</div>
    </section>
  );
};

export default AuthLayout;
