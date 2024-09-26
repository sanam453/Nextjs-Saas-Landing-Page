import { FixedNavbar, Hero, Brands } from "@/components";

export default function Home() {
  return (
    <section className="container mx-auto px-8">
      <FixedNavbar />
      <Hero />
      <Brands />
    </section>
  );
}
