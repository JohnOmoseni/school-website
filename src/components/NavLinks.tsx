"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { animateFn, linksAni } from "@/lib/animate";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/types";
import { logo } from "@/constants/icons";

function NavLinks({
  label,
  href,
  tag,
  openMenu,
  setOpenMenu,
  idx,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const handleClick = (tag: string) => {
    if (openMenu && setOpenMenu) setOpenMenu(false);

    const element = document.getElementById(tag);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="nav-link relative w-full">
      <Link
        href={href}
        {...animateFn(linksAni, idx)}
        onClick={() => handleClick(tag!)}
        className="row-flex-start gap-3 p-1 transition-all"
      >
        <motion.span
          className={cn(
            "tracking-snug font-semibold capitalize",
            isActive && "text-foreground-variant",
          )}
        >
          {label}
        </motion.span>
      </Link>
    </div>
  );
}

export default NavLinks;
