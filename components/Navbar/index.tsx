/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";

import NavbarItem from "@/components/Navbar/Item";
import MobileMenu from "@/components/Navbar/MobileMenu";
import AccountMenu from "@/components/Navbar/AccountMenu";

import { useCallback, useEffect, useState } from "react";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";

const TOP_OFFSET = 66;

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccoutnMenu] = useState(false);
  const [showBackground, setShowBacground] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBacground(true);
      } else setShowBacground(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);
  const toggleAccountMenu = useCallback(() => {
    setShowAccoutnMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={clsx(
          "px-4 md:px-16 py-6 flex items-center transition duration-500",
          showBackground ? "bg-zinc-900/90" : "" 
        )}
      >
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />
        <div className="ml-8 gap-7 hidden text-white lg:flex">
          <NavbarItem label="Accueil" />
          <NavbarItem label="Séries" />
          <NavbarItem label="Films" />
          <NavbarItem label="Nouveautés les plus regardées" />
          <NavbarItem label="Ma liste" />
          <NavbarItem label="Explorer par langue" />
        </div>
        <div
          className="relative ml-8 gap-2 lg:hidden flex items-center cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <p className="text-white text-sm">Parcourir</p>
          <BsChevronDown
            className={clsx(
              "text-white transition",
              showMobileMenu && "rotate-180"
            )}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex items-center gap-7 ml-auto">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>

          <div
            className="flex items-center gap-2 cursor-pointer relative"
            onClick={toggleAccountMenu}
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="image logo du profil" />
            </div>
            <BsChevronDown
              className={clsx(
                "text-white transition",
                showAccountMenu && "rotate-180"
              )}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
}
