/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import SectionQuickIntroduction from "@/components/SectionQuickIntroduction";
import SectionHighlights from "@/components/SectionHighlights";
import SectionTradeIntroduction from "@/components/SectionTradeIntroduction";
import SectionEcosystem from "@/components/SectionEcosystem";
import SectionPartners from "@/components/SectionPartners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main >
      <Header />
      <SectionQuickIntroduction />
      <SectionHighlights />
      <SectionTradeIntroduction />
      <SectionEcosystem />
      <SectionPartners />
      <Footer />
    </main>
  );
}
