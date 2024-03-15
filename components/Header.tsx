import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowDownUpLock,
  faChevronCircleDown,
  faChevronDown,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const buyOpen = [
  {
    name: "Buy on Uniswap",
    href: "https://app.uniswap.org/#/swap?outputCurrency=0x58CB98A966F62aA6F2190eB3AA03132A0c3de3D5&inputCurrency=0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
  },
  {
    name: "Buy on ApeSwap",
    href: "https://apeswap.finance/swap?outputCurrency=0x58CB98A966F62aA6F2190eB3AA03132A0c3de3D5&inputCurrency=0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
  },
  {
    name: "Buy on Pancake",
    href: "https://pancakeswap.finance/swap?outputCurrency=0x27a339d9B59b21390d7209b78a839868E319301B",
  },
];
const buyBond = [
  { name: "Binance Bond", href: "https://bond.openworld.vision/#/" },
  { name: "Harmony Bond", href: "https://onebond.openworld.vision/" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full fixed top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img
              className="h-8 w-auto"
              src="img/opw-icon-logo.svg"
              alt="logo"
              width={32}
              height={32}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a className="text-gray-900" href="https://wiki.ow.finance/">
            Docs
          </a>
          <a className="text-gray-900" href="https://www.ow.finance/">
            Launch App
          </a>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 leading-6 text-gray-900">
              Buy Open
              <FontAwesomeIcon icon={faChevronDown} />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {buyOpen.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50"
                    >
                      <a
                        href={item.href}
                        className="block font-medium text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src="img/opw-icon-logo.svg"
                alt="logo"
                width={32}
                height={32}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="https://wiki.ow.finance/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                >
                  White Paper
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 hover:bg-gray-50 text-gray-900">
                        Buy Open
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {buyOpen.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="https://www.ow.finance/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Protocol
                </a>
                <a
                  href="https://www.ow.finance/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Launch App
                </a>

                <div className="text-sm mt-4 text-text">
                  © 2021-2023{" "}
                  <a href="https://www.ow.finance/" target="_blank">
                    OpenWorld
                  </a>
                  . All rights reserved
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
