"use client";

import { ReactNode, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./_sections/Header";
import Menu from "@/components/Menu";

const Provider = ({ children }: { children: ReactNode }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Header setOpenMenu={setOpenMenu} />
      <AnimatePresence>
        {openMenu && <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />}
      </AnimatePresence>
      {children}
    </>
  );
};

export default Provider;
