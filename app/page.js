import Hero from "@/components/Hero";
import IconProducts from "@/components/IconProducts";
import TemplateProducts from "@/components/TemplateProducts";
import EbookProducts from "@/components/EbookProducts";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  return (
    <main>
      <Hero />
      <EbookProducts />
      <TemplateProducts />
      <IconProducts />
    </main>
  );
};