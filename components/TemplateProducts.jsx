import { database } from "@/lib/appwrite";
import Product from "./Product";

export default async function TemplateProducts(showLabel) {
    const { documents } = await database.listDocuments(
        process.env.APPWRITE_DATABASE_ID,
        process.env.APPWRITE_TEMPLATES_COLLECTION_ID,
    );
    const product = [];
    for (let i = 0; i < documents.length; i++) {
        await product.push(documents[i]);
    }

    return (
        <section className="px-6 py-10 md:px-20">
            {showLabel ? (
                <div className="flex flex-col mb-6 justify-center items-center" id="templates">
                    <h1 className="text-lg font-bold gradientText">
                        Website Templates
                    </h1>
                    <p className="text-xs mt-0">prebuilt custom website templates.</p>
                </div>
            ) : null}
            <div className="flex flex-wrap md:gap-4 gap-6 items-center justify-center">

                {
                    product.map((item, index) => (
                        <Product
                            key={index}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            link={`/product/template/${item.$id}`}
                        />
                    ))
                }
            </div>
        </section>
    );
};