import { FixedNavbar, Hero, Brands, Services, Features, Testimonials, Pricing, Faq, Footer } from "@/components";

export default function Home() {
  return (
    <section className="container mx-auto px-8">
      <FixedNavbar />
      <Hero />
      <Brands />
      <Services />
      <Features />
      <Testimonials />
      <Pricing />
      <Faq />
      <Footer />
    </section>
  );
}
