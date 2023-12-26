export default function Footer() {
    return (
        <footer className="py-16 md:px-20 grid gap-3 px-10 relative">
            <div className="absolute rotate-180 inset-0 -z-10 h-[120%] -mt-20 w-full bg-white dark:bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-15 blur-[100px]"></div></div>
            <div className="mb-3">
                <h1 className="text-3xl font-bold"><span className="gradientText">E</span>store<span className="gradientText">.</span></h1>
                <p className="text-xs mt-1">An digital marketplace for content creaters, editors and coders.</p>
            </div>
            <ul>
                <li><a href="#" className="hover:text-primary hover:underline text-sm">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary hover:underline text-sm">Refund Policy</a></li>
            </ul>
            <ul>
                <li><a href="#" className="hover:text-primary hover:underline text-sm">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary hover:underline text-sm">Sponsership</a></li>
                <p className="text-sm mt-6"> &copy; 2022 All Rights Reserved.</p>
            </ul>
        </footer>
    )
};