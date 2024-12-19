import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
// import FeaturedDestinations from "@/components/sections/FeaturedDestinations";
// import PopularTours from "@/components/sections/PopularTours";
import Testimonials from "@/components/sections/Testimonials";
// import Newsletter from "@/components/sections/Newsletter";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
// import Certificates from "@/components/sections/Certificates";
import ContactIcons from "@/components/layout/ContacIcons";
import AboutUs from "@/components/sections/about-us";
import CountUps from "@/components/sections/countups";
import ServiceSection from "@/components/sections/service-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <SearchFilters /> */}
        {/* <FeaturedDestinations /> */}
        <AboutUs />
        <WhyChooseUs />
        <CountUps />
        <ServiceSection />
        {/* <PopularTours /> */}
        <Testimonials />
        {/* <Certificates /> */}
        {/* <Newsletter /> */}
        <ContactIcons />
      </main>
      <Footer />
    </>
  );
}
