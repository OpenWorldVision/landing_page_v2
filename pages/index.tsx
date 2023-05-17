import Header from "@/components/Header";
import SectionQuickIntroduction from "@/components/SectionQuickIntroduction";
import SectionHighlights from "@/components/SectionHighlights";
import SectionTradeIntroduction from "@/components/SectionTradeIntroduction";
import SectionEcosystem, {
  fetchData as fetchTvl,
} from "@/components/SectionEcosystem";
import SectionPartners from "@/components/SectionPartners";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import MigrateToken from "@/components/MigrateToken";

import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<any> = async () => {
  //@ts-ignore
  const { props } = await fetchTvl();
  return {
    props: {
      data: props.data,
    },
  };
};
//@ts-ignore
export default function Home({ data }) {
  return (
    <div className="relative flex flex-col items-center">
      <Header />
      <SectionQuickIntroduction />
      <MigrateToken />
      <SectionHighlights />
      <SectionTradeIntroduction />
      <SectionEcosystem data={data} />
      <SectionPartners />
      <Footer />
      <ScrollIndicator />
    </div>
  );
}
