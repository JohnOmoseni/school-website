import Features from "./Features";

import AboutSection from "./About";
import Hero from "./Hero";
import SectionWrapper from "./_sections/SectionWrapper";

export default function Home() {
  return (
    <>
      <Hero />

      <main className="relative">
        <SectionWrapper containerStyles="bg-background-100" id="about">
          <AboutSection />
        </SectionWrapper>
        <SectionWrapper containerStyles="bg-background-200" id="features">
          <Features />
        </SectionWrapper>
      </main>
    </>
  );
}
