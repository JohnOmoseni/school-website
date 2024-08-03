"use client";

import Image from "next/image";
import Link from "next/link";

import { logo, MenuIcon } from "@/constants/icons";
import { Button } from "@/components/CustomButton";
import { Dispatch, SetStateAction } from "react";

type HeaderProps = {
  setOpenMenu?: Dispatch<SetStateAction<boolean>>;
};

function Header({ setOpenMenu }: HeaderProps) {
  return (
    <div className="relative z-10 min-h-[50px] w-full px-3 py-3 shadow-sm md:min-h-[70px] md:pb-0">
      <div className="row-flex-btwn mx-auto gap-4 sm:w-[96%]">
        <Link href="/" className="row-flex">
          <Image
            src={logo}
            alt="logo"
            priority
            width={1000}
            height={1000}
            className="h-fit w-36 object-contain max-md:mx-auto sm:w-44"
          />
        </Link>

        <div
          className="icon group sm:!hidden"
          onClick={() => setOpenMenu && setOpenMenu(true)}
        >
          <MenuIcon
            size={22}
            className="transition-all group-hover:scale-95"
            color="#333"
          />
        </div>

        <Button
          title="Contact Us"
          className="min-w-[210px] rounded-lg px-5 max-sm:hidden sm:px-7"
        />
      </div>
    </div>
  );
}

export default Header;
