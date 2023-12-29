import EbookProducts from "@/components/EbookProducts";
import Hero from "@/components/Hero";
import IconProducts from "@/components/IconProducts";
import TemplateProducts from "@/components/TemplateProducts";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
    title: 'Search',
    description:'Find specific products by category.'
}

export default function Page({ params }) {
    return (
        <div>
            <Hero vlv={params.name == "icon" ? "Icon Packs" : params.name == "template" ? "Website Templates" : params.name == "ebook" ? "E-Books" : "Not Found"} />
            <div className="flex flex-col justify-center items-center -mb-3" id="ebooks">
                <h1 className="text-lg font-bold gradientText">
                    Search Result
                </h1>
                <p className="text-xs mt-0">search results for {params.name == "icon" ? "Icon Packs" : params.name == "template" ? "Website Templates" : params.name == "ebook" ? "E-Books" : "Not Found"}.</p>
            </div>
            {params.name == "template" ? <TemplateProducts /> : params.name == "ebook" ? <EbookProducts /> : params.name == "icon" ? <IconProducts /> : (<div className="grid place-content-center gap-2 mt-10"><p className='text-sm'>No Results Found</p><Button variant="outline" asChild><Link href="/">Back</Link></Button></div>)}
        </div>
    );
};
