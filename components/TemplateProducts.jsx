"use client";
import { Badge } from "@/components/ui/badge";

export default function TemplateProducts() {
    const product = [
        {
            name: "E-commerce Store",
            image: "https://sgwebpartners.com/wp-content/uploads/2019/04/woocommerce-wholesale-storm-creek-983x553.jpg",
            price: '15$',
            link: "#"
        },
        {
            name: "Personal Portfolio",
            image: "https://uikitfree.com/wp-content/uploads/2022/11/Portfolio-Landing-Page-Free-Figma-Website-Template-561x338.jpg",
            price: '15$',
            link: "#"
        }
    ];
    return (
        <section className="px-6 py-10 md:px-20">
            <div className="flex flex-col mb-6 justify-center items-center" id="templates">
                <h1 className="text-lg font-bold gradientText">
                    Website Templates
                </h1>
                <p className="text-xs mt-0">prebuilt custom website templates.</p>
            </div>
            <div className="flex flex-wrap md:gap-4 gap-6 items-center justify-center">

                {
                    product.map((item, index) => (
                        <div className="border rounded-md w-fit bg-background dark:bg-secondary p-1 transition hover:scale-105" key={index}>
                            <a href={item.link} className="relative hover:">
                                <img className="rounded-md md:h-[200px] md:w-[300px] w-full h-[260px] max-h-[300px] max-w-[350px]" src={item.image} alt="thumbnail" />
                            </a>
                            <a href={item.link}>
                                <div className="px-5 py-4 mt-1 flex justify-between items-center">
                                    <h1 className="text-lg">{item.name}</h1>
                                    <Badge>{item.price}</Badge>
                                </div>
                            </a>
                        </div>
                    ))
                }

            </div>
        </section>
    );
}