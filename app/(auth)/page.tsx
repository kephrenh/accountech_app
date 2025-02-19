import CTASection from "@/components/public/home/cta-section";
import FeaturesSection from "@/components/public/home/features-section";
import HeroSection from "@/components/public/home/hero-section";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero section */}
      <HeroSection />

      {/* Features section */}
      <FeaturesSection />

      {/* CTA section */}
      <CTASection />
    </div>
  );
}
