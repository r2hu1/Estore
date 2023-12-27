import { ArrowRightToLineIcon, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";

export default async function Header() {

    return (
        <header className="flex justify-between py-6 px-8 md:px-20">
            <div>
                <Link href="/">
                    <h1 className="font-bold text-3xl select-none"><span className="gradientText">E</span>store<span className="gradientText">.</span></h1>
                </Link>
            </div>
            <div className="hidden md:flex items-center justify-center gap-3">
                <ul className="flex gap-6 mr-5">
                    <li className="hover:text-primary text-sm"><Link href="#ebooks">E-Books</Link></li>
                    <li className="hover:text-primary text-sm"><Link href="#templates">Templates</Link></li>
                    <li className="hover:text-primary text-sm"><Link href="#icons">Icons</Link></li>
                    <li className="hover:text-primary text-sm"><Link href="#">Categories</Link></li>
                </ul>
                <SignedOut>
                    <Button asChild><Link href="/sign-in">Login</Link></Button>
                </SignedOut>
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
                <ModeToggle />
            </div>
            <div className="md:hidden flex items-center justify-center gap-5">
                <Sheet>
                    <SheetTrigger><MenuIcon className="h-6 w-6" /></SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetHeader><ModeToggle /></SheetHeader>
                            <SheetDescription>
                                <ul className="mb-6 grid gap-4 mt-20">
                                    <Link href="#icons"><li className="h-12 text-[16px] w-full hover:bg-secondary flex items-center justify-center rounded-sm">Icons</li></Link>
                                    <Link href="#templates"><li className="h-12 text-[16px] w-full hover:bg-secondary flex items-center justify-center rounded-sm">Templates</li></Link>
                                    <Link href="#ebooks"><li className="h-12 text-[16px] w-full hover:bg-secondary flex items-center justify-center rounded-sm">E-Books</li></Link>
                                    <Link href="https://rahul.eu.org" target="_blank"><li className="h-12 text-[16px] w-full hover:bg-secondary flex items-center justify-center rounded-sm">Custom Website</li></Link>
                                    <Link href="#"><li className="h-12 text-[16px] w-full hover:bg-secondary flex items-center justify-center rounded-sm">Categories</li></Link>
                                </ul>
                                <Button className="w-full" asChild><Link href="/contact">Contact Us</Link></Button>
                                <Button className="w-full mt-3" variant="outline" asChild><Link href="/contact">Request Demo</Link></Button>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
                <SignedOut>
                    <Button asChild><Link href="/sign-in">Login</Link></Button>
                </SignedOut>
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
            </div>
        </header>
    );
};
