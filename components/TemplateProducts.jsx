"use client";
import Product from "./Product";

export default function TemplateProducts() {
    const product = [
        {
            name: "E-commerce Store",
            image: "https://sgwebpartners.com/wp-content/uploads/2019/04/woocommerce-wholesale-storm-creek-983x553.jpg",
            price: '15$',
            link: "/product/template/658c4a24541dba83bcdb"
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
                        <Product
                            key={index}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            link={item.link}
                        />
                    ))
                }
            </div>
        </section>
    );
};