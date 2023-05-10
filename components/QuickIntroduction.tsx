import Image from "next/image";

export default function QuickIntroduction() {
  return (
    <div className="flex flex-row px-60 py-40">
      <div className="w-2/5">
        <Image
          src="/wp/wp-content/uploads/2022/12/Frame-31-2.png"
          alt="Frame-31-2"
          width={120}
          height={120}
        />
        <span className="text-title text-3xl leading-tight font-extrabold ">
          Decentralized Derivative Exchange
        </span>
        <Image
          src="wp/wp-content/uploads/2022/12/Rectangle-27.svg"
          className="mt-2 mb-4"
          alt={"Rectangle-27"}
          width={64}
          height={4}
        />
        <div>
          <span className="text-text">
            Trade BTC, ETH, BNB, and other financial assets with up to 30x
            leverage directly from your wallet
          </span>
        </div>
        <a
          href="https://app.openworld.vision"
          className="flex bg-button p-4 w-1/3 justify-center rounded-3xl mt-4"
        >
          <div className="text-white font-semibold">Launch App</div>
        </a>
      </div>
      <div className="relative ml-28">
        <div className="absolute left-0 -top-8">
          <Image
            src="/wp/wp-content/uploads/2022/12/Group-3-1.png"
            alt={"Group-3-1"}
            width={404}
            height={388}
          />
        </div>
        <Image
          src="/wp/wp-content/uploads/2022/12/Group-17.png"
          alt={"Group-17"}
          width={620}
          height={490}
        />
        <div className="absolute right-12 -top-8">
          <Image
            src="/wp/wp-content/uploads/2022/12/Group-16.png"
            alt={"Group-16"}
            width={183}
            height={120}
          />
        </div>
      </div>
    </div>
  );
}
