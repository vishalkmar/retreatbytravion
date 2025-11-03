import ContactCTASectionLanding from "@/components/thailand-landing/ContactCTASectionLanding";
import HeroLanding from "@/components/thailand-landing/HeroLanding";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import RetreatPricingSection from "@/components/thailand-landing/RetreatPricingSection";

import ThailandItinerary from "@/components/thailand-landing/Itinerary";
import AboutThailand from "@/components/thailand-landing/AboutUs";
import ThailandBlogs from "@/components/thailand-landing/Blogs";
import ThailandAccomodation from "@/components/thailand-landing/Accomodation";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <HeroLanding />
      <AboutThailand/>
      <ThailandAccomodation/>
      <ThailandItinerary/>
      <ThailandBlogs/>
      <RetreatPricingSection />
      <ContactCTASectionLanding />
      <SiteFooter />
    </div>
  );
}
