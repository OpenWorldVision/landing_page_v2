import Header from "@/components/Header";
import SectionQuickIntroduction from "@/components/SectionQuickIntroduction";
import SectionHighlights from "@/components/SectionHighlights";
import SectionTradeIntroduction from "@/components/SectionTradeIntroduction";
import SectionEcosystem from "@/components/SectionEcosystem";
import SectionPartners from "@/components/SectionPartners";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import MigrateToken from "@/components/MigrateToken";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Home() {
  const isBreakpoint = useMediaQuery(1024);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/img/banner-background.webp"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "fill",
          zIndex: 1,
        }}
      />
      <img
        style={{
          position: "absolute",
          width: "100%",
          height: "85%",
          objectFit: "contain",
          zIndex: 2,
          margin: "auto",
        }}
        src={
          isBreakpoint
            ? "/img/banner-coming-soon-mobile.webp"
            : "/img/banner-coming-soon.webp"
        }
        alt="banner"
      />
    </div>
  );

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
