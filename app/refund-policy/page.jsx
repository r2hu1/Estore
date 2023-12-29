export const metadata = {
    title: 'Refund Policy',
    description: 'To get a refund, please visit our Contact Page and submit a request with your order details and a brief description of the situation.',
};
export default function Page() {
    return (
        <div className="px-8 md:px-20 py-20">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="dark:opacity-25 absolute left-0 right-0 top-0 mb-10 -z-10 m-auto h-[300px] w-[300px] rounded-full bg-primary opacity-15 blur-[100px]"></div></div>
            <div className="mb-5 text-center">
                <h1 className="text-3xl font-bold gradientText">
                    Refund Policy<span className="text-white">.</span>
                </h1>
                <p className="text-xs">updated on: 28/12/23</p>
            </div>
            <p className="text-sm mt-3 p-3 bg-background border rounded-lg">
                Welcome to Estore, your destination for top-quality digital products including ebooks, templates, and icons. We aim to provide you with exceptional content to meet your needs.

                As digital products are instantly accessible upon purchase, we generally do not offer refunds once the product has been downloaded or accessed.

                However, we understand that genuine mistakes can occur. If you have accidentally made a purchase or encountered a technical issue preventing you from using the product, you may apply for a refund within 4 days of the purchase date. Please visit our Contact Page and submit a request with your order details and a brief description of the situation.

                Refund requests in such circumstances will be reviewed on a case-by-case basis and are not guaranteed. Our team will diligently assess each request to ensure fairness and satisfaction.

                We encourage you to carefully review product details, compatibility, and specifications before making a purchase.
                <br />
                <br />
                Thank you for choosing Estore. Your satisfaction is important to us, and we're committed to providing excellent service.
            </p>
        </div>
    )
}