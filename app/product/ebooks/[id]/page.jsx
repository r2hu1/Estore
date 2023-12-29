import Product from "@/components/Product";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { database, getTemplates } from "@/lib/appwrite";
import { Query } from "appwrite";
import { Check, Shield } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: 'E-Book',
};

export default async function Page({ params }) {
    let { documents } = await database.listDocuments(
        process.env.APPWRITE_DATABASE_ID,
        process.env.APPWRITE_EBOOKS_COLLECTION_ID,
        [
            Query.equal('$id', params.id)
        ],
    );

    const { name, image, price, description, url } = documents[0];

    let { documents: similar } = await database.listDocuments(
        process.env.APPWRITE_DATABASE_ID,
        process.env.APPWRITE_EBOOKS_COLLECTION_ID,
        [
            Query.notEqual("name", name)
        ],
    );

    return (
        <main className="px-8 md:px-20 py-24 lg:px-[120px] grid place-items-center md:block">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 mb-10 -z-10 m-auto h-[300px] w-[300px] rounded-full bg-primary opacity-15 blur-[100px]"></div></div>
            <div className="flex gap-2 text-xs justify-start items-start w-full mb-3 px-1">
                <span>Product</span>
                <span>/</span>
                <span>E-Books</span>
                <span>/</span>
                <span>{name}</span>
            </div>
            <div className="grid md:flex gap-6 justify-between">
                <div className="flex flex-col justify-between">
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
                            <Badge>E-Books</Badge>
                        </div>
                    </div>
                    <div className="mt-6 hidden md:block">
                        <Button className="w-full" variant="outline" asChild><a href={image}>Preview</a></Button>
                        <Button className="w-full" asChild><a href={url}>Buy Now</a></Button>
                    </div>
                </div>
                <div className="w-full max-w-lg">
                    <div>
                        <img className="rounded-lg  md:max-h-[340px] md:min-w-full" src={image} alt={name} />
                    </div>
                    <div className="mt-6 block md:hidden">
                        <Button className="w-full" variant="outline" asChild><a href={image}>Preview</a></Button>
                        <Button className="w-full" asChild><a href={url}>Buy Now</a></Button>
                    </div>
                </div>
            </div>

            <div className="py-[100px] bg-none relative -mb-6 grid md:block place-content-center">
                <div className="flex flex-col mb-6 justify-center items-center">
                    <h1 className="text-lg font-bold gradientText">
                        Similar Products
                    </h1>
                    <p className="text-xs mt-0">we thought you may like this also.</p>
                </div>
                <Product name={similar[0].name} image={similar[0].image} price={similar[0].price} link={`/product/ebooks/${similar[0].$id}`} />
            </div>
        </main>
    )
}