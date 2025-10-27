import ContactCTASectionLanding from "@/components/seychells-landing/ContactCTASectionLanding";
// import FooterLanding from "@/components/landing1/FooterLanding";
// import HeaderLanding from "@/components/landing1/landing1/HeaderLanding";
import HeroLanding from "@/components/seychells-landing/HeroLanding";
import HolisticHealingSectionLanding from "@/components/seychells-landing/HolisticHealingSectionLanding";

import SeychellesExperienceSection from "@/components/seychells-landing/WellnessProgramsLanding";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import WhoThisIsForSection from "@/components/seychells-landing/WhoThisIsSection";
import LandingVenueSection from "@/components/seychells-landing/landingVenueSection";
import RetreatPricingSection from "@/components/seychells-landing/RetreatPricingSection";
import CTASectionLanding from "@/components/seychells-landing/CTASectionLanding";
import ItineraryHorizontalComponent from "@/components/seychells-landing/ItenaryLanding";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
        <SiteHeader />
            <HeroLanding />
            <SeychellesExperienceSection />
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
