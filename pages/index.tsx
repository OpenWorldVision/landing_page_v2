import Header from "@/components/Header";
import SectionQuickIntroduction from "@/components/SectionQuickIntroduction";
import SectionHighlights from "@/components/SectionHighlights";
import SectionTradeIntroduction from "@/components/SectionTradeIntroduction";
import SectionEcosystem from "@/components/SectionEcosystem";
import SectionPartners from "@/components/SectionPartners";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import MigrateToken from "@/components/MigrateToken";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center">
      <Header />
      <SectionQuickIntroduction />
      <MigrateToken />
      <SectionHighlights />
      <SectionTradeIntroduction />
      <SectionEcosystem />
      <SectionPartners />
      <Footer />
      <ScrollIndicator />
    </div>
  );
}
