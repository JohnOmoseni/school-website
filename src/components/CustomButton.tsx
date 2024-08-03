"use client";

import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";
import Image, { StaticImageData } from "next/image";
import ClipLoader from "react-spinners/ClipLoader";

type BtnProps = {
  title: string;
  className?: string;
  src?: StaticImageData;
  type?: "button" | "submit" | "reset";
  btnType?: "variant" | "outline";
  icon?: IconType;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  title,
  btnType = "variant",
  className,
  type,
  src,
  icon: Icon,
  onClick,
  isLoading,
  disabled,
}: BtnProps) => {
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "btn-variant",
        (Icon || src) && "gap-3",
        btnType === "outline" && "btn-outline",
        className,
      )}
    >
      {title}
      {disabled && isLoading && (
        <ClipLoader
          color={"orange"}
          loading={disabled}
          size={20}
          aria-label="Loading"
          data-testid="loader"
          className="row-flex mr-1.5"
        />
      )}
      {Icon && !disabled ? (
        <Icon size={20} className="" />
      ) : (
        src &&
        !disabled && (
          <Image
            src={src}
            alt="icon"
            width={22}
            height={22}
            className="object-contain text-background-100"
          />
        )
      )}
    </button>
  );
};
