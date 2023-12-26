import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
    return (
        <div className="text-center py-20 px-10 flex flex-col gap-6 justify-center items-center">
            <div className="max-w-lg mx-auto">
                <h1 className="font-bold md:text-4xl text-3xl">Your marketplace for high-quality <span className="text-primary">digital assests</span>.</h1>
                <p className="md:text-sm text-xs mt-2 max-w-md mx-auto">Welcome to Estore. Every assest on our platform is verified by our team to ensure our highest quality standards</p>
            </div>
            <div className="flex gap-3">
                <Button>Get Started</Button>
                <Button variant="outline">Explore <ArrowDown className="ml-1 h-5 w-5"/></Button>
            </div>
        </div>
    );
};