import ContactCTASectionLanding from "@/components/oman-landing/ContactCTASectionLanding";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import RetreatPricingSection from "@/components/oman-landing/RetreatPricingSection";
import ItineraryHorizontalComponent from "@/components/oman-landing/ItenaryLanding";

import Hero from "@/components/oman-landing/Hero";
import AboutUs from "@/components/oman-landing/AboutUs";
import Accommodations from "@/components/oman-landing/Accommodations";
import Moments from "@/components/oman-landing/Moments";
import AtAGlance from "@/components/oman-landing/AtAGlance";
import BlogGuides from "@/components/oman-landing/BlogGuides";
import FAQ from "@/components/oman-landing/FAQ";
import Testimonial from "@/components/oman-landing/Testimonial";
import ImageShowcase from "@/components/oman-landing/ImageShowcase";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <Hero />
      <AboutUs />
      <Accommodations />
      <Moments />
      <AtAGlance />
      <ItineraryHorizontalComponent />
      <BlogGuides />
      <RetreatPricingSection />
      <Testimonial />
      <ImageShowcase />
      <FAQ />
      <ContactCTASectionLanding />
      <SiteFooter />
    </div>
  );
}
