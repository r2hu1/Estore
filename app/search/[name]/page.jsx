import EbookProducts from "@/components/EbookProducts";
import Hero from "@/components/Hero";
import IconProducts from "@/components/IconProducts";
import TemplateProducts from "@/components/TemplateProducts";


export default function Page({ params }) {
    return (
        <div>
            <Hero />
            <div className="flex flex-col justify-center items-center" id="ebooks">
                <h1 className="text-lg font-bold gradientText">
                    Search Result
                </h1>
                <p className="text-xs mt-0">search results for {params.name}.</p>
            </div>
            {params.name == "template" ? <TemplateProducts/> : params.name == "ebook" ? <EbookProducts/> : params.name == "icon" ? <IconProducts/> : "Not Found"}
        </div>
    )
}