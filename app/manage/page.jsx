import { Button } from "@/components/ui/button";
import { SignIn, SignInButton, currentUser } from "@clerk/nextjs";

export default async function Page() {
    const user = await currentUser();
    return (
        <>
            {user ? (
                <main className="px-8 md:px-20 py-20">
                    <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 mb-10 -z-10 m-auto h-[300px] w-[300px] rounded-full bg-primary opacity-15 blur-[100px]"></div></div>
                    <div className="text-center">
                        <h1 className="text-3xl w-fit font-bold mx-auto gradientText">Manage<span className="text-white">.</span></h1>
                        <p className="text-xs max-w-md mt-1 mx-auto">Download and manage your products <br /> antime, anywhere.</p>
                    </div>
                    <div className="mt-10">
                        <p className="text-sm text-center mb-10">
                            No products found!
                        </p>
                    </div>
                </main>
            ) : (
                <div className="px-8 md:px-20 py-20">
                    <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 mb-10 -z-10 m-auto h-[300px] w-[300px] rounded-full bg-primary opacity-15 blur-[100px]"></div></div>
                    <div className="text-center">
                        <h1 className="text-3xl w-fit font-bold mx-auto gradientText">Login To Continue<span className="text-white">.</span></h1>
                        <p className="text-xs max-w-md mt-1 mx-auto">You are not logged in, please login to continue.</p>
                    </div>
                    <div className="mt-10 grid place-items-center">
                        <Button className="w-full max-w-sm" asChild><SignInButton /></Button>
                    </div>
                </div>
            )}
        </>
    );
};