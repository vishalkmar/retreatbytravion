import ContactCTASectionLanding from "@/components/innerjourney/ContactCTASectionLanding";
// import FooterLanding from "@/components/landing1/FooterLanding";
// import HeaderLanding from "@/components/landing1/landing1/HeaderLanding";
import HeroLanding from "@/components/innerjourney/HeroLanding";
import HolisticHealingSectionLanding from "@/components/innerjourney/HolisticHealingSectionLanding";
import RetreatSectionLanding from "@/components/innerjourney/RetreatSectionLanding";
import WellnessProgramsLanding from "@/components/innerjourney/WellnessProgramsLanding";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import WhoThisIsForSection from "@/components/innerjourney/WhoThisIsSection"; 
import LandingVenueSection from "@/components/innerjourney/landingVenueSection";
import RetreatPricingSection from "@/components/innerjourney/RetreatPricingSection";
import CTASectionLanding from "@/components/innerjourney/CTASectionLanding";
import ItineraryHorizontalComponent from "@/components/innerjourney/ItenaryLanding";

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
