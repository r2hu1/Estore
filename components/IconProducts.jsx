"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";

export default function IconProducts() {
    const product = [
        {
            name: "Svg Icon Pack",
            image: "https://www.sketchappsources.com/resources/source-image/essentials-icon-pack-deemak-daksina.jpg",
            price: '25$',
            link: "#"
        },
        {
            name: "Editing Icon Pack",
            image: "https://www.sketchappsources.com/resources/source-image/essentials-icon-pack-deemak-daksina.jpg",
            price: '15$',
            link: "#"
        }
    ];
    return (
        <section className="px-6 py-10 md:px-20">
            <div className="flex flex-col mb-6 justify-center items-center" id="icons">
                <h1 className="text-lg font-bold gradientText">
                    Icons
                </h1>
                <p className="text-xs mt-0">svg icons for your website.</p>
            </div>
            <div className="flex flex-wrap md:gap-4 gap-6 items-center justify-center">

                {
                    product.map((item, index) => (
                        <div className="border rounded-md w-fit bg-background dark:bg-secondary p-1 transition hover:scale-105" key={index}>
                            <a href={item.link} className="relative">
                                <img className="rounded-md md:h-[200px] md:w-[300px] w-full h-[260px] max-h-[300px] max-w-[600px]" src={item.image} alt="thumbnail" />
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