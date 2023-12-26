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

export default function Header() {
    return (
        <header className="flex justify-between py-6 px-8 md:px-16">
            <div class="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-15 blur-[100px]"></div></div>
            <div>
                <h1 className="font-bold text-3xl"><span className="text-primary">E</span>store<span className="text-primary">.</span></h1>
            </div>
            <div className="hidden md:flex items-center justify-center gap-3">
                <ul className="flex gap-3 mr-5">
                    <li className="hover:text-primary text-sm"><a href="#">Icons</a></li>
                    <li className="hover:text-primary text-sm"><a href="#">Templates</a></li>
                    <li className="hover:text-primary text-sm"><a href="#">Editing</a></li>
                    <li className="hover:text-primary text-sm"><a href="#">All</a></li>
                </ul>
                <Button>Login <ArrowRightToLineIcon className="ml-1 h-5 w-5" /></Button>
                <ModeToggle />
            </div>
            <div className="md:hidden flex items-center justify-center">
                <Sheet>
                    <SheetTrigger><MenuIcon className="h-6 w-6" /></SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetHeader><ModeToggle /></SheetHeader>
                            <SheetDescription>
                                <ul className="mb-6 grid gap-4 mt-20">
                                    <li className="h-12 text-[16px] w-full hover:bg-secondary flex items-center justify-center rounded-sm"><a href="#">Icons</a></li>
                                    <li className="h-12 text-[16px] w-full hover:bg-secondary flex items-center justify-center rounded-sm"><a href="#">Website Template</a></li>
                                    <li className="h-12 text-[16px] w-full hover:bg-secondary flex items-center justify-center rounded-sm"><a href="#">Graphics Design</a></li>
                                    <li className="h-12 text-[16px] w-full hover:bg-secondary flex items-center justify-center rounded-sm"><a href="#">Editing Packs</a></li>
                                    <li className="h-12 text-[16px] w-full hover:bg-secondary flex items-center justify-center rounded-sm"><a href="#">All</a></li>
                                </ul>
                                <Button className="w-full">Login <ArrowRightToLineIcon className="ml-1 h-5 w-5" /></Button>
                                <Button className="w-full mt-3" variant="outline">Get Started</Button>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};