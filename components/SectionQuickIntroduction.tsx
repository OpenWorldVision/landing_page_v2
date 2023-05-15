import Image from "next/image";
import MainButton from "./MainButton";

export default function SectionQuickIntroduction() {
  return (
    <div className="md:flex md:flex-row px-4 py-4 md:px-60 md:py-40 md:mt-7">
      <div className="md:w-2/5">
        <Image
          src="wp/wp-content/uploads/2022/12/Frame-31-2.png"
          alt="Frame-31-2"
          width={120}
          height={120}
          className="mt-32"
        />
        <span className="text-title text-sm-xl md:text-3xl leading-tight font-extrabold ">
          Decentralized Derivative Exchange
      </span>
        <Image
          src="wp/wp-content/uploads/2022/12/Rectangle-27.svg"
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
      <div>
        <div className="relative md:ml-28 mt-16">
          <div className="absolute left-0 -top-8">
            <Image
              src="wp/wp-content/uploads/2022/12/Group-3-1.png"
              alt={"Group-3-1"}
              width={404}
              height={388}
            />
          </div>
          <Image
            src="wp/wp-content/uploads/2022/12/Group-17.png"
            alt={"Group-17"}
            width={620}
            height={490}
          />
          <div className="absolute right-12 -top-8">
            <Image
              src="wp/wp-content/uploads/2022/12/Group-16.png"
              alt={"Group-16"}
              width={183}
              height={120}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
