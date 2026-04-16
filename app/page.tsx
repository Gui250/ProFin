import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import BenefitsSection from "@/components/sections/benefits-section";
import ContactSection from "@/components/sections/contact-section";
import CoreFunctionsSection from "@/components/sections/core-functions-section";
import FininhoSection from "@/components/sections/fininho-section";
import FAQSection from "@/components/sections/faq-section";
import Hero from "@/components/sections/hero";
import TextCardsSection from "@/components/sections/text-cards-section";
import WaitlistSection from "@/components/sections/waitlist-section";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main className="pt-24 md:pt-28">
        <Hero />
        <TextCardsSection />
        <CoreFunctionsSection />
        <FininhoSection />
        <BenefitsSection />
        <FAQSection />
        <WaitlistSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
