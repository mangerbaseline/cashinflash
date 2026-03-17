import Image from "next/image";
import Navbar from "../components/navabar";
import Hero from "../components/hero";
import TrustSection from "@/components/trustSection";
import CashSection from "@/components/cashAdvance";
import GetStartSection from "@/components/getstart";
import GetStartedTwo from "@/components/getStart2";
import GetSmart from "@/components/getSmart";
import FAQSection from "@/components/faq";
import MediaLogos from "@/components/unknown";
import CTASection from "@/components/CTA";
import Footer from "@/components/footer";
import LegalDisclosures from "@/components/legalDisclosure";
import AppPromotion from "@/components/getStart2O"; 

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustSection />
      <CashSection />
      <AppPromotion />
      <GetStartedTwo />
      <GetSmart />
      <FAQSection />
      <MediaLogos />
      <CTASection />
      <Footer />
      <LegalDisclosures />
    </div>
  );
}
