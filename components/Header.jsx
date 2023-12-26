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
        <header className="flex justify-between py-6 px-8 md:px-20">
            <div>
                <h1 className="font-bold text-3xl"><span className="gradientText">E</span>store<span className="gradientText">.</span></h1>
            </div>
            <div className="hidden md:flex items-center justify-center gap-3">
                <ul className="flex gap-6 mr-5">
                    <li className="hover:text-primary text-sm"><a href="#icons">Icons</a></li>
                    <li className="hover:text-primary text-sm"><a href="#">Templates</a></li>
                    <li className="hover:text-primary text-sm"><a href="#">Editing</a></li>
                    <li className="hover:text-primary text-sm"><a href="#">All</a></li>
                </ul>
                <Button>Login</Button>
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
                                    <li className="h-12 text-[16px] w-full hover:bg-secondary flex items-center justify-center rounded-sm"><a href="#icons">Icons</a></li>
                                    <li className="h-12 text-[16px] w-full hover:bg-secondary flex items-center justify-center rounded-sm"><a href="#">Website Template</a></li>
                                    <li className="h-12 text-[16px] w-full hover:bg-secondary flex items-center justify-center rounded-sm"><a href="#">Graphics Design</a></li>
                                    <li className="h-12 text-[16px] w-full hover:bg-secondary flex items-center justify-center rounded-sm"><a href="#">Editing Packs</a></li>
                                    <li className="h-12 text-[16px] w-full hover:bg-secondary flex items-center justify-center rounded-sm"><a href="#">All</a></li>
                                </ul>
                                <Button className="w-full">Login</Button>
                                <Button className="w-full mt-3" variant="outline">Get Started</Button>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};
