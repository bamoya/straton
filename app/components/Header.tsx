"use client";
import { Disclosure } from "@headlessui/react";
import { HiBars3, HiMiniXMark } from "react-icons/hi2";
import Link from "next/link";
import { company, navigation } from "@/app/config/index.json";

export default function Header() {
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
                    <HiMiniXMark className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiBars3 className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between ">
                <Link
                  href="/"
                  className="flex flex-shrink-0 gap-2 items-center"
                >
                  <img
                    className="h-12 w-auto"
                    src={company.logo}
                    alt={company.name}
                  />
                  <h1 className="text-xl font-semibold text-neutral uppercase  md:block ">
                    {company.name}
                  </h1>
                </Link>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex flex-row-reverse text-right gap-6 ">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={
                          "text-gray-900 block hover:text-orange-500  text-base font-meduim "
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

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-5 px-2 pb-3 pt-2 text-center">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-900 hover:text-orange-500 font-meduim "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
