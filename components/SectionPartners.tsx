import Image from "next/image";
import MainImage from "./MainImage";

const listImage = [
  { src: "/wp/wp-content/uploads/2022/12/harmony-logo-blue.png" },
  { src: "/wp/wp-content/uploads/2022/12/cloudjet-blue.png" },
  { src: "/wp/wp-content/uploads/2022/12/XBN-blue.png" },
  { src: "/wp/wp-content/uploads/2022/12/altair-alpha-blue.png" },
  { src: "/wp/wp-content/uploads/2022/12/altair-cliff-blue.png" },
  { src: "/wp/wp-content/uploads/2022/12/now-wallet-logo-blue.png" },
  { src: "/wp/wp-content/uploads/2023/03/kypeswap-logo-blue.png" },
  { src: "/wp/wp-content/uploads/2023/04/stably-logo-blue.png" },
  { src: "/wp/wp-content/uploads/2023/05/abeswap.png" },
  { src: "/wp/wp-content/uploads/2022/12/youMeme-logo-blue.png" },
  { src: "/wp/wp-content/uploads/2022/12/upgrade-design-logo-blue.png" },
  { src: "/wp/wp-content/uploads/2022/12/ttrlogo-blue.png" },
  { src: "/wp/wp-content/uploads/2022/12/tribeone-logo-white-blue.png" },
  { src: "/wp/wp-content/uploads/2022/12/sandboxcasino-blue.png" },
  { src: "/wp/wp-content/uploads/2022/12/plataOcrypto-logo-blue.png" },
  { src: "/wp/wp-content/uploads/2022/12/hyve-logo-blue.png" },
  { src: "/wp/wp-content/uploads/2022/12/hyperjump-blue.png" },
  { src: "/wp/wp-content/uploads/2022/12/formless-logo-blue.png" },
  { src: "/wp/wp-content/uploads/2022/12/coverCompared-blue.png" },
];

const listSmallImage = [
  {
    src: "/wp/wp-content/uploads/2022/12/coingecko-blue@0.3x.png",
    href: "https://www.coingecko.com/en/coins/openworld",
  },
  {
    src: "/wp/wp-content/uploads/2022/12/pancakeswap-cake-logo-blue@0.3x.png",
    href: "https://pancakeswap.finance/swap?outputCurrency=0x27a339d9B59b21390d7209b78a839868E319301B",
  },
  {
    src: "/wp/wp-content/uploads/2022/12/733635-blue.png",
    href: "https://twitter.com/OpenWorldVision",
  },
  {
    src: "/wp/wp-content/uploads/2022/12/discord-blue.png",
    href: "https://discord.com/invite/zS2khZ4F7K",
  },
  {
    src: "/wp/wp-content/uploads/2022/12/telegram-blue.png",
    href: "https://t.me/openworldglobal",
  },
  {
    src: "/wp/wp-content/uploads/2022/12/loudspeaker-icon-blue.png",
    href: "https://t.me/OpenWorldVision",
  },
  {
    src: "/wp/wp-content/uploads/2022/12/medium-blue@0.5x.png",
    href: "https://openworldvision.substack.com/",
  },
  {
    src: "/wp/wp-content/uploads/2022/12/free-medium-icon-2177-thumb-blue.png",
    href: "https://openworldvision.medium.com",
  },
  {
    src: "/wp/wp-content/uploads/2022/12/icon-blue.png",
    href: "https://bscscan.com/token/0x27a339d9b59b21390d7209b78a839868e319301b",
  },
  {
    src: "/wp/wp-content/uploads/2022/12/coinmarketcap-icon-blue.png",
    href: "https://coinmarketcap.com/currencies/cryptowar-xblade",
  },
];

export default function SectionPartners() {
  return (
    <div className="flex flex-col md:px-72 md:py-20">
      <span className="text-title md:text-2xl text-xl font-bold text-center mt-8 md:mt-0">
        Backers & Partners
      </span>
      <Image
        src="wp/wp-content/uploads/2022/12/Rectangle-27.svg"
        className="self-center"
        alt={"Rectangle-27"}
        width={68}
        height={4}
      />
      <div className="grid md:grid-cols-4 grid-cols-2 md:mt-20 md:mb-28 mt-12">
        {listImage.map((item, index) => {
          return (
            <div key={index} className="flex justify-center">
              <MainImage
                sizes="md:10vw"
                src={item.src}
                alt={""}
                className="md:p-6 md:mx-0 my-4"
              />
            </div>
          );
        })}
      </div>
      <div className="md:flex md:flex-1 md:justify-around grid grid-cols-4 mt-8 md:mt-0">
        {listSmallImage.map((item, index) => {
          return (
            <a
              key={index}
              href={item.href}
              className="md:px-6 flex justify-center"
            >
              <img src={item.src} alt={""} className="md:mb-0 mb-8 w-9" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
