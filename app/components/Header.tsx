"use client";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { HiBars3, HiMiniXMark } from "react-icons/hi2";
import Link from "next/link";
import config from "@/app/config/index.json";
import { BiSearch } from "react-icons/bi";

export default function Header() {
  const navigation = config.navigation;
  const company = config.company;
  const [isopen, setIsOpen] = useState<boolean>(false);
  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-center">
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center border border-gray-300 hover:border-gray-500 justify-center rounded-md p-2 text-gray-500 hover:text-gray-900 ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <div>
                      <HiMiniXMark
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    </div>
                  ) : (
                    <div onClick={() => setIsOpen(!isopen)}>
                      <HiBars3
                        onClick={() => setIsOpen(!isopen)}
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </Disclosure.Button>
              </div>
              <div className="w-full flex items-center">
                <BiSearch className="block md:hidden h-10 w-10 text-gray-900" />
                <Link
                  href="/"
                  className="absolute left-[50%] translate-x-[-50%] md:translate-x-0 md:left-0 flex flex-shrink-0 gap-2 items-center"
                >
                  <img
                    className="h-16 w-auto"
                    src={company.logo}
                    alt={company.name}
                  />
                  {/* <h1 className="text-xl font-semibold text-neutral uppercase  md:block ">
                    {company.name}
                  </h1> */}
                </Link>

                <div className="hidden absolute right-0 md:ml-6 md:block">
                  <div className="flex flex-row-reverse text-right gap-6 ">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={
                          "text-gray-900 font-bold text-xl block hover:text-orange-500   font-meduim "
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {open && (
            <Disclosure.Panel className="absolute inset-0  top-20  pb-4  bg-white h-fit shadow-md  md:hidden">
              <div className="space-y-5 px-2 pb-3 pt-2 text-center z-50">
                {navigation.map((item, index) => (
                  <Link
                    onClick={() => setIsOpen(false)}
                    key={item.name}
                    href={item.href}
                    className="block text-gray-900 text-xl hover:text-orange-500 font-bold "
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          )}
        </>
      )}
    </Disclosure>
  );
}
