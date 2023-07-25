import Image from "next/image";
import MainImage from "./MainImage";

const listTopImage = [
  { src: "img/certik.webp" },
  { src: "img/kypeswap-logo-blue.webp" },
  { src: "img/swing-xyz.webp" },
  { src: "img/abeswap.webp" },
  { src: "img/arbitrum.webp" },
  { src: "img/stably-logo-blue.webp" },
  { src: "img/harmony-logo-blue.webp" },
  { src: "img/chainlink.webp" },
];
const listBottomImage = [
  { src: "img/cloudjet-blue.webp" },
  { src: "img/altair-alpha-blue.webp" },
  { src: "img/altair-cliff-blue.webp" },
  { src: "img/now-wallet-logo-blue.webp" },
  { src: "img/youMeme-logo-blue.webp" },
  { src: "img/upgrade-design-logo-blue.webp" },
  { src: "img/tribeone-logo-white-blue.webp" },
  { src: "img/sandboxcasino-blue.webp" },
  { src: "img/plataOcrypto-logo-blue.webp" },
  { src: "img/hyve-logo-blue.webp" },
  { src: "img/hyperjump-blue.webp" },
  { src: "img/coverCompared-blue.webp" },
];

const listSmallImage = [
  {
    src: "img/coingecko-blue@0.3x.webp",
    href: "https://www.coingecko.com/en/coins/openworld",
  },
  {
    src: "img/pancakeswap-cake-logo-blue@0.3x.webp",
    href: "https://pancakeswap.finance/swap?outputCurrency=0x27a339d9B59b21390d7209b78a839868E319301B",
  },
  {
    src: "img/733635-blue.webp",
    href: "https://twitter.com/OpenWorldVision",
  },
  {
    src: "img/discord-blue.webp",
    href: "https://discord.com/invite/zS2khZ4F7K",
  },
  {
    src: "img/telegram-blue.webp",
    href: "https://t.me/openworldglobal",
  },
  {
    src: "img/loudspeaker-icon-blue.webp",
    href: "https://t.me/OpenWorldVision",
  },
  {
    src: "img/icon-blue.webp",
    href: "https://bscscan.com/token/0x27a339d9b59b21390d7209b78a839868e319301b",
  },
  {
    src: "img/coinmarketcap-icon-blue.webp",
    href: "https://coinmarketcap.com/currencies/cryptowar-xblade",
  },
];

export default function SectionPartners() {
  return (
    <div className="flex flex-col md:py-20 max-w-screen-xl px-10">
      <span className="text-title md:text-2xl text-xl font-bold text-center mt-8 md:mt-0">
        Backers & Partners
      </span>
      <img
        src="img/Rectangle-27.svg"
        className="self-center"
        alt={"Rectangle-27"}
        width={68}
        height={4}
      />
      <div className="grid md:grid-cols-4 grid-cols-2 md:mt-20 mt-12">
        {listTopImage.map((item, index) => {
          return (
            <div key={index} className="flex justify-center">
              <img
                src={item.src}
                alt={""}
                className="md:p-6 md:mx-0 my-4 scale-95 md:scale-[0.7]"
              />
            </div>
          );
        })}
      </div>
      {/* <img
        src="img/line2.webp"
        alt={""}
        className="w-4/6 h-[2px] self-center md:w-3/6"
      /> */}
      <div className="grid md:grid-cols-4 grid-cols-2 md:mb-28 mt-12">
        {/* {listBottomImage.map((item, index) => {
          return (
            <div key={index} className="flex justify-center">
              <img
                src={item.src}
                alt={""}
                className="md:p-6 md:mx-0 my-4 scale-95 md:scale-[0.7]	"
              />
            </div>
          );
        })} */}
      </div>
      <div className="md:flex md:flex-1 md:justify-around grid grid-cols-4 mt-8 md:mt-0">
        {listSmallImage.map((item, index) => {
          return (
            <a
              key={index}
              href={item.href}
              className="md:px-6 flex justify-center"
            >
              <img
                src={item.src}
                alt={""}
                className="md:mb-0 mb-8 w-9 scale-90 md:scale-100"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
