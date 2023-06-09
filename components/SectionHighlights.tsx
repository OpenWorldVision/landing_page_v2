import Image from "next/image";
import MainImage from "./MainImage";

export default function SectionHighlights() {
  return (
    <div className="bg-section px-0 w-full flex justify-center">
      <div className="max-w-screen-xl mx-10">
        <div className="flex flex-col md:flex-row bg-section justify-center md:py-20">
          <div className="relative box-content bg-white px-4 text-justify pt-4 pb-10 rounded-2xl mx-4 md:mx-0 mt-20">
            <div className="absolute left-4 -top-12 shadow-2xl rounded-full w-20 h-20">
              <img
                src="img/save-icon.svg"
                alt={"save-icon"}
                width={80}
                height={80}
              />
            </div>
            <img
              src={"img/web-icon-01.svg"}
              alt={"web-icon-01"}
              className="absolute right-5"
            />
            <div className="pt-8 text-title text-lg font-extrabold tracking-wider">
              Reduce Liquidation Risk
            </div>
            <img
              src="img/Rectangle-27.svg"
              className="mt-2 mb-4"
              alt={"Rectangle-27"}
              width={64}
              height={4}
            />
            <div className="ml-4 text-text tracking-wider">
              Aggregated price feed by ChainLink Oracles smooth out price
              anomalies and reduced liquidation risk for traders.
            </div>
          </div>
          <div className="relative box-content bg-white px-4 text-justify pt-4 pb-10 rounded-2xl mx-4 md:mx-8 mt-20">
            <div className="absolute h-14 w-14 left-4 -top-12 shadow-2xl rounded-full w-20 h-20">
              <img
                src="img/Frame-37-svg-02.svg"
                alt={"Frame-37-svg-02"}
                width={80}
                height={80}
              />
            </div>
            <img
              src={"img/web-icon-02.svg"}
              alt={"web-icon-01"}
              className="absolute right-5"
            />
            <div className="pt-8 text-title text-lg font-extrabold tracking-wider">
              Minimum Trade Cost
            </div>
            <img
              src="img/Rectangle-27.svg"
              className="my-2"
              alt={"Rectangle-27"}
              width={68}
              height={4}
            />
            <div className="ml-4 text-text tracking-wider">
              One simple and minimal opening and closing trade fee instead of
              various fee everywhere. Zero price impact trades.
            </div>
          </div>
          <div className="relative box-content bg-white px-4 text-justify pt-4 pb-10 rounded-2xl mx-4 md:mx-0 mt-20 mb-20 md:mb-0">
            <div className="absolute h-14 w-14 left-4 -top-12 shadow-2xl rounded-full w-20 h-20">
              <img
                src="img/Frame-37-svg-03.svg"
                alt={"Frame-37-svg-03"}
                width={80}
                height={80}
              />
            </div>
            <img
              src={"img/web-icon-03-02.svg"}
              alt={"web-icon-01"}
              className="absolute right-5"
            />
            <div className="pt-8 text-title text-lg font-extrabold tracking-wider">
              Non-Custodial Trading
            </div>
            <img
              src="img/Rectangle-27.svg"
              className="my-2"
              alt={"Rectangle-27"}
              width={68}
              height={4}
            />
            <div className="ml-4 text-text tracking-wider">
              No risk of trading house insolvency. Trade directly from your
              wallet without depositing funds into any custodial service.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
