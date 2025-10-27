import ContactCTASectionLanding from "@/components/thailand-landing/ContactCTASectionLanding";
// import FooterLanding from "@/components/landing1/FooterLanding";
// import HeaderLanding from "@/components/landing1/landing1/HeaderLanding";
import HeroLanding from "@/components/thailand-landing/HeroLanding";
import HolisticHealingSectionLanding from "@/components/thailand-landing/HolisticHealingSectionLanding";

import ThailandExperienceLanding from "@/components/thailand-landing/WellnessProgramsLanding";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import WhoThisIsForSection from "@/components/thailand-landing/WhoThisIsSection";
import LandingVenueSection from "@/components/thailand-landing/landingVenueSection";
import RetreatPricingSection from "@/components/thailand-landing/RetreatPricingSection";
import CTASectionLanding from "@/components/thailand-landing/CTASectionLanding";
import ItineraryHorizontalComponent from "@/components/thailand-landing/ItenaryLanding";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
        <SiteHeader />
            <HeroLanding />
            <ThailandExperienceLanding />
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
