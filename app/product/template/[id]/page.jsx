import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { template } from "@/products/template";
import { Check, Shield } from "lucide-react";
import Link from "next/link";


export default function Page({ params }) {
    const product = {
        name: "E-Commerse Website",
        description: "The best e-commerce website template",
        price: "15$",
        category: "templates",
        image: "https://sgwebpartners.com/wp-content/uploads/2019/04/woocommerce-wholesale-storm-creek-983x553.jpg",
        rating: 5,
    };
    const { name, image, price, description, url } = template.find(template => {
        return template.id === params.id;
    });

    return (
        <main className="px-8 md:px-20 py-20">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-0 blur-[100px]"></div></div>
            <div className="grid">
                <div>
                    <div>
                        <div className="mb-2">
                            <h1 className="text-3xl font-bold">
                                {name}
                            </h1>
                            <p className="text-sm mt-1 mb-3">
                                {description}
                            </p>
                        </div>
                        <div className="flex gap-2 mb-6">
                            <Badge>{price}</Badge>
                            <Badge>Templates</Badge>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="rounded-lg" src={image} alt={name} />
                    </div>
                    <div className="mt-6">
                        <Button className="w-full" asChild><Link href={url}>Buy Now</Link></Button>
                    </div>
                </div>
            </div>
        </main>
    )
}