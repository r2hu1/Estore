"use client";
import Product from "./Product";

export default function EbookProducts() {
    const product = [
        {
            name: "C Programming",
            image: "https://online.crbtech.in/wp-content/uploads/2019/03/C-programming-1024x530.png",
            price: '15$',
            link: "/product/ebooks/658c67850459e975063a"
        },
    ];

    return (
        <section className="px-6 py-10 md:px-20">
            <div className="flex flex-col mb-6 justify-center items-center" id="templates">
                <h1 className="text-lg font-bold gradientText">
                    E-Books
                </h1>
                <p className="text-xs mt-0">high quality ebooks written by professionals.</p>
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