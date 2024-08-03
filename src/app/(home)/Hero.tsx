"use client";

import Image from "next/image";
import Link from "next/link";
import TextGenerateEffect from "@/components/anims/TextGenerateEffect";
import { Button } from "@/components/CustomButton";
import {
  ArrowRight,
  hero1,
  hero2,
  hero3,
  hero4,
  person,
  star,
} from "@/constants/icons";

function Hero() {
  return (
    <div className="relative isolate grid min-h-dvh grid-cols-1 gap-8 pt-10 sm:pt-[6%] md:gap-12">
      <div className="flex-1 max-md:px-6">
        <h1 className="relative text-center">
          Transform Your School Into A{" "}
          <span className="font-semibold text-secondary-foreground">
            Beacon Of{" "}
            <span className="relative font-semibold">
              Excellence
              <Image
                src={star}
                alt="hero"
                width={1000}
                height={1000}
                className="absolute -right-14 top-1/2 h-fit w-12 -translate-y-1/2 object-contain"
              />
            </span>
          </span>
        </h1>

        <TextGenerateEffect
          className="mx-auto mt-5 max-w-[60ch] px-3 text-center font-light sm:text-lg lg:max-w-[80ch]"
          words="Enter a future where every student is engaged, every teacher is supported, and every parent is connected. Future Bridge elevates your school, streamlines operations, and creates an environment where education thrives."
        />

        <Link href="#" className="row-flex mt-12">
          <Button
            title="Get Started"
            icon={ArrowRight}
            className="!h-auto !bg-variant !px-12 !py-3 !text-lg !text-foreground"
          />
        </Link>
      </div>

      <div className="row-flex relative -z-10 mx-auto w-[96%] md:w-[90%] lg:w-[80%]">
        <Image
          src={person}
          alt="hero"
          width={1000}
          height={1000}
          className="object-contain object-center md:max-h-[90vh]"
        />

        <Image
          src={hero1}
          alt="hero"
          width={1000}
          height={1000}
          className="absolute left-0 top-0 h-fit max-w-40 object-contain max-[400px]:max-w-28 sm:min-w-64 sm:max-w-48 lg:max-w-80"
        />

        <Image
          src={hero2}
          alt="hero"
          width={1000}
          height={1000}
          className="absolute left-[5%] top-[60%] h-fit max-w-40 object-contain max-[400px]:max-w-28 sm:min-w-64 sm:max-w-48 lg:left-[10%] lg:max-w-80"
        />
        <Image
          src={hero3}
          alt="hero"
          width={1000}
          height={1000}
          className="absolute bottom-[5%] right-0 h-fit max-w-40 object-contain max-[400px]:max-w-28 sm:min-w-64 sm:max-w-48 lg:max-w-80"
        />

        <Image
          src={hero4}
          alt="hero"
          width={1000}
          height={1000}
          className="absolute right-0 top-[10%] h-fit max-w-32 object-contain max-[400px]:max-w-24 sm:min-w-44 sm:max-w-52 lg:max-w-72"
        />
      </div>
    </div>
  );
}

export default Hero;
