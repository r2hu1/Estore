import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IconProducts from "@/components/IconProducts";
import TemplateProducts from "@/components/TemplateProducts";

export default async function Home() {
  return (
    <main>
      <Hero />
      {/* <Categories/> */}
      <TemplateProducts />
      <IconProducts />
    </main>
  );
};