import { aboutSection } from "@/constants";
import { aboutframe } from "@/constants/icons";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="">
      <div className="flex-column !items-center gap-3.5">
        <p className="badge">
          About us
          <span className="absolute right-[99%] top-[50%] z-0 h-1 w-[50px] translate-y-[-50%] rounded-full bg-grey-btn after:absolute after:-left-[0.6rem] after:-top-[0.6rem] after:aspect-square after:h-6 after:w-6 after:rounded-md after:bg-variant" />
        </p>
        <h2 className="text-center text-4xl">
          Discover the values of{" "}
          <span className="font-semibold text-secondary-foreground">
            Future Bridge.{" "}
          </span>
        </h2>
      </div>

      <div className="relative my-12 flex grid-cols-[repeat(2,_minmax(200px,_400px))] flex-col gap-1 max-md:px-2 sm:grid lg:w-[90%]">
        {aboutSection.map((item, idx) => {
          return <AboutBox key={idx} idx={idx} {...item} />;
        })}
      </div>

      <div className="absolute bottom-0 right-0 -z-10 h-[210px] w-[230px] sm:h-[410px] sm:w-[440px] lg:h-[610px] lg:w-[680px]">
        <Image src={aboutframe} alt="" fill className="bottom-0 object-cover" />
      </div>
    </div>
  );
};

export default AboutSection;

const AboutBox = ({
  title,
  body,
}: {
  title: string;
  body: string;
  idx: number;
}) => {
  return (
    <div className="relative w-full rounded-md max-md:mx-auto max-md:max-w-[600px]">
      <div className="px-3.5 py-5 md:px-6">
        <h3 className="relative text-xl max-sm:text-center sm:text-2xl">
          {title}
        </h3>
        <p className="mt-4 text-grey max-sm:pr-3 max-sm:text-center">{body}</p>
      </div>
    </div>
  );
};
