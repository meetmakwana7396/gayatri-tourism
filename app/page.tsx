import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedDestinations from "@/components/sections/FeaturedDestinations";
import PopularTours from "@/components/sections/PopularTours";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Certificates from "@/components/sections/Certificates";
import ContactIcons from "@/components/layout/ContacIcons";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <SearchFilters /> */}
        <FeaturedDestinations />
        <WhyChooseUs />
        <PopularTours />
        <Testimonials />
        <Certificates />
        <Newsletter />
        <ContactIcons />
      </main>
      <Footer />
    </>
  );
}
