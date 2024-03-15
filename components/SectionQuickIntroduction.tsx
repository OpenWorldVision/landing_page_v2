import Image from "next/image";
import MainButton from "./MainButton";
import MigrateToken from "./MigrateToken";

export default function SectionQuickIntroduction() {
  return (
    <div className="flex md:flex-row flex-col-reverse py-4 md:py-40 md:mt-7 max-w-screen-xl px-10">
      <div className="md:w-2/5">
        <img
          src="img/Frame-31-2.webp"
          alt="Frame-31-2"
          width={120}
          height={120}
          className="md:mt-32"
        />
        <span className="text-title text-sm-xl md:text-3xl leading-tight font-extrabold ">
          Decentralized Derivative Exchange
        </span>
        <img
          src="img/Rectangle-27.svg"
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
          href="https://www.ow.finance/"
          title={"Launch App"}
          className={"px-10 py-4 mt-4 text-lg"}
        />
      </div>
      <div className="relative mt-28 md:ml-28 md:mt-16">
        <div className="absolute left-0 -top-8">
          <img
            src="img/Group-3-1.webp"
            alt={"Group-3-1"}
            className="w-4/6 lg:w-full"
          />
        </div>
        <img src="img/Group-17.webp" alt={"Group-17"} />
        <div className="absolute right-12 -top-8">
          <img
            src="img/Group-16.webp"
            alt={"Group-16"}
            className="w-4/6 lg:w-full"
          />
        </div>
      </div>
    </div>
  );
}
