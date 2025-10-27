import ContactCTASectionLanding from "@/components/anantam/ContactCTASectionLanding";
// import FooterLanding from "@/components/landing/FooterLanding";
// import HeaderLanding from "@/components/landing/HeaderLanding";
import HeroLanding from "@/components/anantam/HeroLanding";
import HolisticHealingSectionLanding from "@/components/anantam/HolisticHealingSectionLanding";
import RetreatSectionLanding from "@/components/anantam/RetreatSectionLanding";
import WellnessProgramsLanding from "@/components/anantam/WellnessProgramsLanding";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import WhoThisIsForSection from "@/components/anantam/WhoThisIsSection";
import RetreatPricingSection from "@/components/anantam/RetreatPricingSection";
import LandingVenueSection from "@/components/anantam/landingVenueSection";
import CTASectionLanding from "@/components/anantam/CTASectionLanding";
import ItineraryHorizontalComponent from "@/components/anantam/IteneryLanding";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <HeroLanding />
      <WellnessProgramsLanding />
      <WhoThisIsForSection/>
      <HolisticHealingSectionLanding />
      <RetreatSectionLanding />
      <RetreatPricingSection/>
      <ItineraryHorizontalComponent/>
      <LandingVenueSection/>
      <CTASectionLanding/>
      <ContactCTASectionLanding />
      <SiteFooter />
    </div>  
  );
}
