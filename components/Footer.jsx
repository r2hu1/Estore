import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-16 md:px-24 grid gap-3 px-10 relative mt-6">
            <div className="absolute rotate-180 inset-0 -z-10 h-[120%] -mt-20 w-full bg-white dark:bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-15 dark:opacity-25 blur-[100px]"></div></div>
            <div className="mb-3">
                <Link href="/">
                    <h1 className="text-3xl font-bold select-none"><span className="gradientText">E</span>store<span className="gradientText">.</span></h1>
                </Link>
                <p className="text-xs mt-0">An digital marketplace for content creaters, editors and coders.</p>
            </div>
            <div className='flex gap-10 md:justify-between'>
                <ul>
                    <li><Link href="/privacy-policy" className="hover:text-primary hover:underline text-sm">Privacy Policy</Link></li>
                    <li><Link href="/refund-policy" className="hover:text-primary hover:underline text-sm">Refund Policy</Link></li>
                </ul>
                <ul>
                    <li><Link href="/contact" className="hover:text-primary hover:underline text-sm">Contact Us</Link></li>
                    <li><Link href="/contact" className="hover:text-primary hover:underline text-sm">Sponsership</Link></li>
                </ul>
            </div>
            <p className="text-xs mt-3 md:text-center md:mt-5"> &copy; 2022 Estore All Rights Reserved.</p>
        </footer>
    )
};
