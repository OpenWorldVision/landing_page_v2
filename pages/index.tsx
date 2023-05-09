/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-row px-60 py-40">
        <div className="w-2/5">
          <img src="wp/wp-content/uploads/2022/12/Frame-31-2.png" alt="icon1" />
          <span className="text-title text-3xl leading-tight font-extrabold ">
            Decentralized Derivative Exchange
          </span>

          <div>
            <span>
              Trade BTC, ETH, BNB, and other financial assets with up to 30x
              leverage directly from your wallet
            </span>
          </div>
          <div>
            <a href="https://app.openworld.vision">Launch App</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-0 -top-8">
            <img src="wp/wp-content/uploads/2022/12/Group-3-1.png" />
          </div>
          <img src="wp/wp-content/uploads/2022/12/Group-17.png" />
          <div className="absolute right-12 -top-8">
            <img src="wp/wp-content/uploads/2022/12/Group-16.png" />
          </div>
        </div>
      </div>
      <div className="bg-section px-0">
        <div className="flex flex-row bg-section justify-center px-40 py-20">
          <div className="relative box-content bg-white px-4 pt-4 pb-16 rounded-2xl">
            <div className="absolute h-14 w-14 left-4 -top-12 shadow-2xl rounded-full w-20 h-20">
              <img src="wp/wp-content/uploads/2022/12/save-icon.svg" />
            </div>
            <div className="pt-8 text-title text-xl font-extrabold tracking-wider">
              Reduce Liquidation Risk
            </div>
            <img
              src="wp/wp-content/uploads/2022/12/Rectangle-27.svg"
              className="mt-2 mb-4"
            />
            <div className="ml-4 text-text tracking-wider">
              Aggregated price feed by ChainLink Oracles smooth out price
              anomalies and reduced liquidation risk for traders.
            </div>
          </div>
          <div className="relative box-content bg-white px-4 pt-4 pb-16 rounded-2xl mx-8">
            <div className="absolute h-14 w-14 left-4 -top-12 shadow-2xl rounded-full w-20 h-20">
              <img src="wp/wp-content/uploads/2022/12/Frame-37-svg-02.svg" />
            </div>
            <div className="pt-8 text-title text-xl font-extrabold tracking-wider">
              Minimum Trade Cost
            </div>
            <img
              src="wp/wp-content/uploads/2022/12/Rectangle-27.svg"
              className="my-2"
            />
            <div className="ml-4 text-text tracking-wider">
              One simple and minimal opening and closing trade fee instead of
              various fee everywhere. Zero price impact trades.
            </div>
          </div>
          <div className="relative box-content bg-white px-4 pt-4 pb-16 rounded-2xl">
            <div className="absolute h-14 w-14 left-4 -top-12 shadow-2xl rounded-full w-20 h-20">
              <img src="wp/wp-content/uploads/2022/12/Frame-37-svg-03.svg" />
            </div>
            <div className="pt-8 text-title text-xl font-extrabold tracking-wider">
              Non-Custodial Trading
            </div>
            <img
              src="wp/wp-content/uploads/2022/12/Rectangle-27.svg"
              className="my-2"
            />
            <div className="ml-4 text-text tracking-wider">
              No risk of trading house insolvency. Trade directly from your
              wallet without depositing funds into any custodial service.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row  justify-center px-40 py-20">
        <div className="flex-1 p-8">
          <img src="wp/wp-content/uploads/2022/12/app-img-02-02.png" />
        </div>
        <div className="flex-1">
          <div className="px-8">
            <img src="wp/wp-content/uploads/2022/12/trade-free-icon.svg" />
            <span className="text-title text-2xl font-bold leading-tight ">
              Zero price impact with minimum fee
            </span>
            <img
              src="wp/wp-content/uploads/2022/12/Rectangle-27.svg"
              className="my-2"
            />
            <span className="text-base text-text">
              Trade synthetic financial assets with minimal fee, zero price
              impact, and up to 30x more buying power. No deposit.
            </span>
          </div>
          <div className="flex flex-row justify-end p-8">
            <div className="flex-1">
              <div className="flex bg-button p-4 w-1/2 justify-center rounded-3xl">
                <div className="text-white font-semibold">Trade now</div>
              </div>
            </div>
            <div className="flex flex-1 justify-end">
              <div className="flex align-center h border-2 border-button p-0 rounded-2xl">
                <div className="text-sm px-2">Learn more</div>
              </div>
              <div className="border-2 border-button p-0 rounded-2xl ">
                <div className="text-sm px-2">Join Discord</div>
              </div>
            </div>
          </div>
          <div>1</div>
        </div>
      </div>
    </main>
  );
}
