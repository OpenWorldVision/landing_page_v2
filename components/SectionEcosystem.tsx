import Image from "next/image";
import React from "react";
import MainImage from "./MainImage";
import MainButton from "./MainButton";

export default function SectionEcosystem() {
  return (
    <div
      className=" px-0"
      style={{
        background:
          "linear-gradient(180deg, rgba(231, 237, 255, 0.3) 59.9%, rgba(248, 248, 248, 0.3) 100%)",
      }}
    >
      <div className="flex flex-col px-72 py-20">
        <Image
          src="/wp/wp-content/uploads/2022/12/ecosytem-icon.svg"
          alt={"trade-free-icon"}
          width={64}
          height={64}
          className="shadow-2xl rounded-3xl mb-5"
        />
        <span className="text-title text-2xl font-bold leading-tight ">
          Two tokens create our
          <br />
          ecosystem
        </span>
        <Image
          src="/wp/wp-content/uploads/2022/12/Rectangle-27.svg"
          className="my-2"
          alt={"Rectangle-27"}
          width={68}
          height={4}
        />
        <span className="text-base text-text">
          One token for governance, one token for providing liquidity.
        </span>
        <div className="flex flex-row mt-12">
          <div className="flex-1 bg-white mr-5 rounded-3xl p-5 relative overflow-hidden">
            <MainImage
              src={"/wp/wp-content/uploads/2023/05/bg_buy_open.svg"}
              alt={"bg_buy_open"}
              className="absolute h-full right-0 bottom-0"
            />
            <MainImage
              src={"/wp/wp-content/uploads/2022/12/OP-defi-logo-01.svg"}
              alt="OP-defi-logo-01"
            />
            <div className="pt-4 px-6">
              <span className="text-sm font-semibold text-title">
                {`Openworld is the utility and governance token. Accrues 30% of the
              platform's generated fees.`}
              </span>
            </div>
            <MainButton
              href="https://pancakeswap.finance/swap?outputCurrency=0x27a339d9B59b21390d7209b78a839868E319301B"
              title={"Buy Open"}
              className={
                "px-3 py-2 mt-5 bg-title text-sx font-extrabold hover:bg-button"
              }
            />
          </div>
          <div className="flex-1 bg-white rounded-3xl p-5 relative overflow-hidden">
            <MainImage
              src={"/wp/wp-content/uploads/2023/05/bg_buy_oap.svg"}
              alt={"bg_buy_oap"}
              className="absolute h-full right-0 bottom-0 font-extrabold"
            />
            <MainImage
              src={"/wp/wp-content/uploads/2023/01/OAP-Logo.svg"}
              alt="OP-defi-logo-01"
              style={{ height: 32 }}
            />
            <div className="pt-4 px-6">
              <span className="text-sm font-semibold text-title">
                {`Openworld is the utility and governance token. Accrues 30% of the
              platform's generated fees.`}
              </span>
            </div>
            <MainButton
              href="https://app.openworld.vision/#/buy_oap"
              title={"Buy OAP"}
              className={"px-3 py-2 mt-5 text-sx font-extrabold"}
            />
          </div>
        </div>
        <div className="flex mt-24">
          <div className="flex flex-col justify-center">
            <span className="text-title text-xl font-bold leading-tight ">
              Two tokens create
              <br />
              our ecosystem
            </span>
            <Image
              src="/wp/wp-content/uploads/2022/12/Rectangle-27.svg"
              className="my-2"
              alt={"Rectangle-27"}
              width={68}
              height={4}
            />
            <span className="text-base text-text">
              Openworld is currently live on
              <br />
              Binance Smart Chain, Harmony
              <br />
              Chain & Arbitrum Chain.
            </span>
          </div>
          <MainImage
            src={"/wp/wp-content/uploads/2023/04/open-chain.png"}
            alt={"open-chain"}
            className="mx-10"
            style={{ width: 480 }}
          />
          <MainButton
            href="https://app.openworld.vision/"
            title={"Launch App"}
            className="self-center px-6 py-4"
          />
        </div>
        <div className="flex flex-col mt-24">
          <span className="text-title text-xl font-bold leading-tight ">
            Trusted by over 55,000 traders
          </span>
          <Image
            src="/wp/wp-content/uploads/2022/12/Rectangle-27.svg"
            className="my-2"
            alt={"Rectangle-27"}
            width={68}
            height={4}
          />
          <span className="text-base text-text">
            We believe everyone should have access to open & powerful financial
            tools.
          </span>
          <div className="flex flex-1 mr-5 bg-lightBlue mt-4 rounded-3xl">
            <div className="flex flex-1 flex-col text-center py-5 relative">
              <span className="text-base text-title font-medium">
                Trading Volume
              </span>
              <span className="text-xl text-button font-extrabold">
                $11,063
              </span>
              <span className="text-base text-title">LAST 24H</span>
              <div className="h-full w-px bg-white absolute right-0 bottom-0" />
            </div>
            <div className="flex flex-1 flex-col text-center py-5 relative">
              <span className="text-base text-title font-medium">Trades</span>
              <span className="text-xl text-button font-extrabold">12</span>
              <span className="text-base text-title">LAST 24H</span>
              <div className="h-full w-px bg-white absolute right-0 bottom-0" />
            </div>
            <div className="flex flex-1 flex-col text-center py-5 relative">
              <span className="text-base text-title font-medium">TVL</span>
              <span className="text-xl text-button font-extrabold">299,865</span>
              <span className="text-base text-title">LAST 24H</span>
              <div className="h-full w-px bg-white absolute right-0 bottom-0" />
            </div>
            <div className="flex flex-1 flex-col text-center py-5 relative">
              <span className="text-base text-title font-medium">
                Accumulated trading
              </span>
              <span className="text-xl text-button font-extrabold">100,948</span>
              <span className="text-base text-title">LAST 24H</span>
              <div className="h-full w-px bg-white absolute right-0 bottom-0" />
            </div>
            <div className="flex flex-1 flex-col text-center py-5 relative">
              <span className="text-base text-title font-medium">
                Open Interest
              </span>
              <span className="text-xl text-button font-extrabold">
                $943
              </span>
              <span className="text-base text-title">LAST 24H</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
