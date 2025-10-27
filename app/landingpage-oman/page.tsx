import ContactCTASectionLanding from "@/components/oman-landing/ContactCTASectionLanding";
// import FooterLanding from "@/components/landing1/FooterLanding";
// import HeaderLanding from "@/components/landing1/landing1/HeaderLanding";
import HeroLanding from "@/components/oman-landing/HeroLanding";
import HolisticHealingSectionLanding from "@/components/oman-landing/HolisticHealingSectionLanding";

import OmanExperienceLanding from "@/components/oman-landing/WellnessProgramsLanding";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import WhoThisIsForSection from "@/components/oman-landing/WhoThisIsSection";
import LandingVenueSection from "@/components/oman-landing/landingVenueSection";
import RetreatPricingSection from "@/components/oman-landing/RetreatPricingSection";
import CTASectionLanding from "@/components/oman-landing/CTASectionLanding";
import ItineraryHorizontalComponent from "@/components/oman-landing/ItenaryLanding";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <HeroLanding />
      <OmanExperienceLanding />
      <WhoThisIsForSection />
      <HolisticHealingSectionLanding />
      <RetreatPricingSection />
      <ItineraryHorizontalComponent />
      <LandingVenueSection />
      <CTASectionLanding />
      <ContactCTASectionLanding />
      <SiteFooter />
    </div>
  );
}
