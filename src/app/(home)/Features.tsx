import { FeatureCard } from "./Card";
import { features } from "@/constants";

const Features = () => {
  return (
    <div className="relative">
      <div className="flex-column !items-center gap-3.5">
        <p className="badge">
          What we offer{" "}
          <span className="absolute right-[99%] top-[50%] z-0 h-1 w-[50px] translate-y-[-50%] rounded-full bg-grey-btn after:absolute after:-left-[0.6rem] after:-top-[0.6rem] after:aspect-square after:h-6 after:w-6 after:rounded-md after:bg-variant" />
        </p>
        <h2 className="text-center text-4xl">
          Uncover the{" "}
          <span className="font-semibold text-secondary-foreground">
            Benefits{" "}
          </span>{" "}
          of choosing us.{" "}
        </h2>
      </div>

      <div className="flex-column relative mx-auto mt-8 gap-6 max-md:px-3 max-sm:mt-[10%] md:mt-12 md:gap-10">
        <div className="sm:row-flex flex w-full grid-cols-[1fr_minmax(250px,_380px)] flex-col !items-start gap-6 md:grid lg:grid lg:grid-cols-[1fr_minmax(250px,_500px)] lg:gap-8">
          {features.slice(0, 2).map((item, idx) => (
            <FeatureCard key={idx} idx={idx} {...item} />
          ))}
        </div>

        <div className="sm:row-flex flex w-full grid-cols-[minmax(250px,_380px)_1fr] flex-col !items-start gap-6 md:grid lg:grid lg:grid-cols-[minmax(250px,_500px)_1fr] lg:gap-8">
          {features.slice(2).map((item, idx) => (
            <FeatureCard key={idx} idx={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
