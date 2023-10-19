"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { NAV_LINKS } from "@/constants";
import Button from './Button';


function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full relative top-0 left-0 right-0 max-container padding-container z-30">
      <div>
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
         
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
              <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="z-20 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                  <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                  </Link>
                ))}
              </ul>
              <div className="lg:flexCenter hidden">
                <Button 
                  type="button"
                  title="Login"
                  icon="/user.svg"
                  variant="btn_dark_green"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;