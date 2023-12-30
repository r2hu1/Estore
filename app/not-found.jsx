import { Button } from "@/components/ui/button";
import Filters from "@/components/utlis/Filter";
import Link from "next/link";

export default function Page() {
    return (
        <main className="px-8 md:px-20 py-24 lg:px-[120px] grid place-items-center">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="dark:opacity-25 absolute left-0 right-0 top-0 mb-10 -z-10 m-auto h-[300px] w-[300px] rounded-full bg-primary opacity-15 blur-[100px]"></div></div>
            <div className="flex flex-col mb-6 justify-center items-center">
                <h1 className="text-lg font-bold gradientText">
                    Not Found
                </h1>
                <p className="text-xs mt-0">error page not found, check for typo errors.</p>
            </div>
            <div>
                <Filters />
                <Button asChild className="w-full mt-4"><Link href="/">Go To Homepage</Link></Button>
            </div>
        </main>
    )
};