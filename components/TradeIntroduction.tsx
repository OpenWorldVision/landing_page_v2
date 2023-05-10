import Image from "next/image";

export default function TradeIntroduction() {
  return (
    <div className="flex flex-row  justify-center px-40 py-20">
      <div className="flex-1 p-8">
        <Image
          src="/wp/wp-content/uploads/2022/12/app-img-02-02.png"
          alt={"app-img-02-02"}
          width={1024}
          height={769}
        />
      </div>
      <div className="flex-1">
        <div className="px-8">
          <Image
            src="/wp/wp-content/uploads/2022/12/trade-free-icon.svg"
            alt={"trade-free-icon"}
            width={64}
            height={64}
            className="shadow-2xl shadow rounded-3xl mb-5"
          />
          <span className="text-title text-2xl font-bold leading-tight ">
            Zero price impact with minimum fee
          </span>
          <Image
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
        <div className="flex flex-row justify-end p-8">
          <div className="flex-1">
            <div className="flex bg-button p-4 w-1/2 justify-center rounded-3xl">
              <div className="text-white font-semibold">Trade now</div>
            </div>
          </div>
          <div className="flex flex-1 justify-end">
            <a className="flex border-2 h-9 border-button rounded-3xl mr-4 items-center">
              <div className="text-sm px-2">Learn more</div>
            </a>
            <a className="flex border-2 border-button h-9 rounded-3xl items-center">
              <div className="text-sm px-2">Join Discord</div>
            </a>
          </div>
        </div>
        <div>1</div>
      </div>
    </div>
  );
}
