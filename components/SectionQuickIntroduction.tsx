import Image from "next/image";
import MainButton from "./MainButton";
import MigrateToken from "./MigrateToken";

export default function SectionQuickIntroduction() {
  return (
    <div className="flex md:flex-row flex-col-reverse py-4 md:py-40 md:mt-7 max-w-screen-xl px-10">
      <div className="md:w-2/5">
        <img
          src="/wp/wp-content/uploads/2022/12/Frame-31-2.png"
          alt="Frame-31-2"
          width={120}
          height={120}
          className="md:mt-32"
        />
        <span className="text-title text-sm-xl md:text-3xl leading-tight font-extrabold ">
          Decentralized Derivative Exchange
        </span>
        <img
          src="/wp/wp-content/uploads/2022/12/Rectangle-27.svg"
          className="mt-2 mb-4"
          alt={"Rectangle-27"}
          width={64}
          height={4}
        />

        <span className="text-text">
          Trade BTC, ETH, BNB, and other financial assets with up to 30x
          leverage directly from your wallet
        </span>

        <MainButton
          href="https://app.openworld.vision/"
          title={"Launch App"}
          className={"px-10 py-4 mt-4 text-lg"}
        />
      </div>
      <div className="relative mt-28 md:ml-28 md:mt-16">
        <div className="absolute left-0 -top-8">
          <img
            src="/wp/wp-content/uploads/2022/12/Group-3-1.png"
            alt={"Group-3-1"}
            className="w-4/6 lg:w-full"
          />
        </div>
        <img
          src="/wp/wp-content/uploads/2022/12/Group-17.png"
          alt={"Group-17"}
        />
        <div className="absolute right-12 -top-8">
          <img
            src="/wp/wp-content/uploads/2022/12/Group-16.png"
            alt={"Group-16"}
            className="w-4/6 lg:w-full"
          />
        </div>
      </div>
    </div>
  );
}
