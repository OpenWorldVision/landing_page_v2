/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import QuickIntroduction from "@/components/QuickIntroduction";
import SectionHighlights from "@/components/SectionHighlights";
import TradeIntroduction from "@/components/TradeIntroduction";

export default function Home() {
  return (
    <main>
      <Header />
      <QuickIntroduction />
      <SectionHighlights />
      <TradeIntroduction />
    </main>
  );
}
