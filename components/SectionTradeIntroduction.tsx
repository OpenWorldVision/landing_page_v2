import Image from "next/image";
import MainButton from "./MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import OutlineButton from "./OutlineButton";
import MainImage from "./MainImage";

export default function SectionTradeIntroduction() {
  return (
    <div className="flex flex-col md:flex-row justify-center py-20 max-w-screen-xl mx-10 md:py-20">
      <div className="flex-1 md:p-8">
        <img
          src="/wp/wp-content/uploads/2022/12/app-img-02-02.png"
          alt={"app-img-02-02"}
          width={1024}
          height={769}
        />
      </div>
      <div className="flex-1">
        <div className="md:px-8">
          <img
            src="/wp/wp-content/uploads/2022/12/trade-free-icon.svg"
            alt={"trade-free-icon"}
            width={64}
            height={64}
            className="shadow-2xl rounded-3xl mb-5"
          />
          <span className="text-title text-2xl font-bold leading-tight ">
            Zero price impact with minimum fee
          </span>
          <img
            src="/wp/wp-content/uploads/2022/12/Rectangle-27.svg"
            className="my-2"
            alt={"Rectangle-27"}
            width={68}
            height={4}
          />
          <span className="text-base text-text">
            Trade synthetic financial assets with minimal fee, zero price
            impact, and up to 30x more buying power. No deposit.
          </span>
        </div>
        <div className="flex my-4 flex-col md:my-0 md:p-8 xl:flex-row">
          <div className="flex-1">
            <MainButton
              href="https://app.openworld.vision/#/trade"
              title={"Trade Now"}
              icon={
                <FontAwesomeIcon
                  icon={faMoneyBillTransfer}
                  color={"white"}
                  fontSize={14}
                />
              }
              className="px-5 py-4 rounded-full font-medium text-sm"
            />
          </div>
          <div className="flex flex-1 xl:justify-end mt-2 xl:mt-0">
            <OutlineButton
              href="https://wiki.openworld.vision/"
              title={"Learn more"}
              className={"mr-4"}
            />
            <OutlineButton
              href="https://discord.gg/zS2khZ4F7K"
              title={"Join Discord"}
            />
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(90deg, #DDE2F0 0%, #F5F7FD 48.96%)",
          }}
          className="flex border-4 border-button rounded-3xl flex-col items-center sm:items-start sm:flex-row"
        >
          <img
            src={"/wp/wp-content/uploads/2022/12/app-mobile.png"}
            alt={"app-mobile"}
            className="mx-6 w-5/6 max-h-80 sm:w-3/6 md:max-h-64"
          />
          <div className="flex flex-col justify-center align-justify mb-2 pt-4 px-4 border-t-4 border-button sm:mr-3 sm:pt-0 sm:px-0 sm:border-t-0 sm:self-center">
            <span className="text-lg font-extrabold text-title">
              Available On Mobile Soon!
            </span>
            <span className="text-14 text-content text-justify">
              Available for{" "}
              <span className="text-title font-medium">desktop</span> now,
              comming to
              <br />
              <span className="text-title font-medium">Mobile</span> soon!
            </span>
            <img
              src={"/wp/wp-content/uploads/2022/08/Download-icon.png"}
              alt={"Download-icon.png"}
              className="self-center mt-5 w-3/5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
