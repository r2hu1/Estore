import Hero from "@/components/Hero";
import IconProducts from "@/components/utlis/IconProducts";
import TemplateProducts from "@/components/utlis/TemplateProducts";
import EbookProducts from "@/components/utlis/EbookProducts";

export default async function Home() {
  return (
    <main>
      <Hero vlv={"All Products"}/>
      <TemplateProducts showLabel />
      <EbookProducts showLabel />
      <IconProducts showLabel />
    </main>
  );
};
