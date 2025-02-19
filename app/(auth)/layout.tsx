import Footer from "@/components/public/layout/footer";
import Header from "@/components/public/layout/header";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="grow flex flex-col justify-center items-center h-full relative w-full">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,_#f0f0f0_1px,_transparent_1px),linear-gradient(to_bottom,_#f0f0f0_1px,_transparent_1px)] bg-[size:6rem_4rem]"></div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
