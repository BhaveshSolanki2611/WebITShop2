import { Hero } from "@/components/sections/Hero";
import { ServiceShortcuts } from "@/components/sections/ServiceShortcuts";
import { CompanyIntro } from "@/components/sections/CompanyIntro";
import { ReasonsToWork } from "@/components/sections/ReasonsToWork";
import { TopServices } from "@/components/sections/TopServices";
import { StatCounters } from "@/components/sections/StatCounters";
import { Commitments } from "@/components/sections/Commitments";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { SkillBars } from "@/components/sections/SkillBars";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceShortcuts />
      <CompanyIntro />
      <ReasonsToWork />
      <TopServices />
      <StatCounters />
      <Commitments />
      <TestimonialCarousel />
      <WhyChooseUs />
      <SkillBars />
      <CTABanner />
    </>
  );
}
