import Hero from "@/components/Hero";
import IconProducts from "@/components/IconProducts";
import TemplateProducts from "@/components/TemplateProducts";
import EbookProducts from "@/components/EbookProducts";

export default async function Home() {
  return (
    <main>
      <Hero />
      <EbookProducts/>
      <TemplateProducts />
      <IconProducts />
    </main>
  );
};