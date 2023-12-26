import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IconProducts from "@/components/IconProducts";
import TemplateProducts from "@/components/TemplateProducts";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      {/* <Categories/> */}
      <IconProducts/>
      <TemplateProducts/>
      <Footer/>
    </main>
  );
};