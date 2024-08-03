"use client";

import { motion } from "framer-motion";
import { sidebarLinks } from "@/constants";
import { Close, logo } from "@/constants/icons";
import { animateFn, revealMenu, slideinVariant } from "@/lib/animate";
import { MenuProps } from "@/types";
import NavLinks from "./NavLinks";
import Image from "next/image";

function Menu({ openMenu, setOpenMenu }: MenuProps) {
  return (
    <motion.div
      style={{ zIndex: 9999 }}
      className="fixed inset-0 block h-dvh w-full overflow-hidden bg-black/30 backdrop-blur-sm md:hidden"
      {...animateFn(revealMenu)}
      onClick={() => setOpenMenu(false)}
    >
      <motion.div
        {...animateFn(slideinVariant)}
        className="menu remove-scrollbar flex-column absolute right-0 top-0 isolate h-dvh w-[80%] max-w-[500px] overflow-hidden bg-background-100 px-[4%] backdrop-blur-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="icon absolute right-4 top-2 p-1 transition-colors active:scale-95"
          onClick={() => setOpenMenu(false)}
          title="close-menu"
        >
          <Close size="22" className="cursor-pointer text-foreground" />
        </span>

        <Image
          src={logo}
          alt="logo"
          priority
          width={180}
          height={28}
          className="h-fit w-32 object-contain"
        />

        <nav className="flex-column mx-auto h-full flex-1 gap-8 pt-[10%] text-xl">
          {sidebarLinks.map((link, idx) => (
            <NavLinks
              key={idx}
              {...link}
              idx={idx}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
          ))}
        </nav>
      </motion.div>
    </motion.div>
  );
}

export default Menu;
