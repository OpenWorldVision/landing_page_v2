import Image from "next/image";
import React, { useEffect, useState } from "react";
import MainImage from "./MainImage";
import MainButton from "./MainButton";
import { formatAmount } from "@/utils/numbers";

export default function SectionEcosystem() {
  const [tvl, setTVL] = useState("0");

  async function getData() {
    const res = await fetch("https://keeper-bot.openworld.vision/api/v1/tvl");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  useEffect(() => {
    getData().then((data) => {
      setTVL(formatAmount(data?.tvl, 30, 0, true));
    });
  }, []);

  return (
    <div
      className="px-0 w-full flex justify-center"
      style={{
        background:
          "linear-gradient(180deg, rgba(231, 237, 255, 0.3) 59.9%, rgba(248, 248, 248, 0.3) 100%)",
      }}
    >
      <div className="flex flex-col md:py-20 max-w-screen-xl px-10">
        <img
          src="/wp/wp-content/uploads/2022/12/ecosytem-icon.svg"
          alt={"trade-free-icon"}
          width={64}
          height={64}
          className="shadow-2xl rounded-3xl mb-5 mt-10 md:mt-0"
        />
        <span className="text-title text-2xl font-bold leading-tight ">
          Dual Token
          <br />
          Ecosystem
        </span>
        <img
          src="/wp/wp-content/uploads/2022/12/Rectangle-27.svg"
          className="my-2"
          alt={"Rectangle-27"}
          width={68}
          height={4}
        />
        <span className="text-base text-text">
          One token for governance, one token for providing liquidity.
        </span>
        <div className="flex flex-col md:flex-row mt-12">
          <div className="flex-1 bg-white md:mr-5 rounded-3xl p-5 relative overflow-hidden">
            <img
              src={"/wp/wp-content/uploads/2023/05/bg_buy_open.svg"}
              alt={"bg_buy_open"}
              className="absolute h-full right-0 bottom-0"
            />
            <img
              src={"/wp/wp-content/uploads/2022/12/OP-defi-logo-01.svg"}
              alt="OP-defi-logo-01"
            />
            <div className="pt-4 md:px-6 z-10 relative">
              <span className="text-sm font-semibold text-title">
                {`Openworld is the utility and governance token. Accrues 30% of the
              platform's generated fees.`}
              </span>
            </div>
            <div className="mb-10 mt-5 flex flex-wrap gap-2 md:mb-0 z-10 relative">
              <MainButton
                href="https://app.uniswap.org/#/swap?outputCurrency=0x58CB98A966F62aA6F2190eB3AA03132A0c3de3D5&inputCurrency=0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"
                title={"Buy on Uniswap"}
                className={
                  "px-3 py-2 bg-title text-sx font-extrabold hover:bg-button"
                }
              />
              <MainButton
                href="https://apeswap.finance/swap?outputCurrency=0x58CB98A966F62aA6F2190eB3AA03132A0c3de3D5&inputCurrency=0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"
                title={"Buy on ApeSwap"}
                className={
                  "px-3 py-2 bg-title text-sx font-extrabold hover:bg-button"
                }
              />
              <MainButton
                href="https://pancakeswap.finance/swap?outputCurrency=0x27a339d9B59b21390d7209b78a839868E319301B"
                title={"Buy on Pancake"}
                className={
                  "px-3 py-2 bg-title text-sx font-extrabold hover:bg-button"
                }
              />
            </div>
          </div>
          <div className="flex-1 bg-white rounded-3xl p-5 relative overflow-hidden mt-8 md:mt-0">
            <img
              src={"/wp/wp-content/uploads/2023/05/bg_buy_oap.svg"}
              alt={"bg_buy_oap"}
              className="absolute h-full right-0 bottom-0 font-extrabold"
            />
            <img
              src={"/wp/wp-content/uploads/2023/01/OAP-Logo.svg"}
              alt="OP-defi-logo-01"
              style={{ height: 32 }}
              className="z-10 relative"
            />
            <div className="pt-4 md:px-6 z-10 relative">
              <span className="text-sm font-semibold text-title">
                {`Openworld is the utility and governance token. Accrues 30% of the
              platform's generated fees.`}
              </span>
            </div>
            <MainButton
              href="https://app.openworld.vision/#/buy_oap"
              title={"Buy OAP"}
              className={"px-3 py-2 mt-5 text-sx font-extrabold z-10 relative"}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-24 xl:w-11/12">
          <div className="flex flex-col justify-center md:max-w-xs ">
            <span className="text-title text-xl font-bold leading-tight">
              Two tokens create our ecosystem
            </span>
            <img
              src="/wp/wp-content/uploads/2022/12/Rectangle-27.svg"
              className="my-2"
              alt={"Rectangle-27"}
              width={68}
              height={4}
            />
            <span className="text-base text-text">
              Openworld is currently live on Binance Smart Chain, Harmony Chain
              & Arbitrum Chain.
            </span>
          </div>
          <div className="flex flex-1 justify-center mx-8 mt-8 mb-6 md:mt-0">
            <img
              src={"/wp/wp-content/uploads/2023/04/open-chain.png"}
              alt={"open-chain"}
            />
          </div>
          <MainButton
            href="https://app.openworld.vision/"
            title={"Launch App"}
            className="self-center px-6 py-4 my-3 md:my-0"
          />
        </div>
        <div className="flex flex-col mt-24">
          <span className="text-title text-xl font-bold leading-tight ">
            Trusted by over 55,000 traders
          </span>
          <img
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
          <div className="flex flex-col md:flex-row flex-1 md:mr-5 bg-lightBlue mt-4 rounded-3xl">
            <div className="flex flex-1 flex-col text-center py-5 relative">
              <span className="text-base text-title font-medium">
                Trading Volume
              </span>
              <span className="text-xl text-button font-extrabold">
                $11,063
              </span>
              <span className="text-base text-title">LAST 24H</span>
              <div className="bg-white absolute bottom-0 right-0 h-px w-full md:h-full md:w-px " />
            </div>
            <div className="flex flex-1 flex-col text-center py-5 relative">
              <span className="text-base text-title font-medium">Trades</span>
              <span className="text-xl text-button font-extrabold">12</span>
              <span className="text-base text-title">LAST 24H</span>
              <div className="bg-white absolute bottom-0 right-0 h-px w-full md:h-full md:w-px " />
            </div>
            <div className="flex flex-1 flex-col text-center py-5 relative">
              <span className="text-base text-title font-medium">TVL</span>
              <span className="text-xl text-button font-extrabold">{tvl}</span>
              <span className="text-base text-title">LAST 24H</span>
              <div className="bg-white absolute bottom-0 right-0 h-px w-full md:h-full md:w-px " />
            </div>
            <div className="flex flex-1 flex-col text-center py-5 relative">
              <span className="text-base text-title font-medium">
                Accumulated trading
              </span>
              <span className="text-xl text-button font-extrabold">
                100,948
              </span>
              <span className="text-base text-title">LAST 24H</span>
              <div className="bg-white absolute bottom-0 right-0 h-px w-full md:h-full md:w-px " />
            </div>
            <div className="flex flex-1 flex-col text-center py-5 relative">
              <span className="text-base text-title font-medium">
                Open Interest
              </span>
              <span className="text-xl text-button font-extrabold">$943</span>
              <span className="text-base text-title">LAST 24H</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
