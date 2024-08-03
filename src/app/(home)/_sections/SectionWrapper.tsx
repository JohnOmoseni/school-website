import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id: string;
  containerStyles?: string;
};

const SectionWrapper = ({ children, containerStyles, id }: Props) => {
  return (
    <div
      id={id}
      className={cn(
        "relative isolate min-h-[50vh] overflow-hidden px-3 py-8 sm:px-[4%] sm:py-[4em]",
        containerStyles,
      )}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
