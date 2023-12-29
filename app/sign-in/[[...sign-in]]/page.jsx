import { SignIn } from "@clerk/nextjs";


export const metadata = {
  title: 'Sign-In',
  description: 'Sign-In to your account.',
};

export default function Page() {
  return (
    <div className="flex mt-24 items-center justify-center w-full px-8">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="dark:opacity-25 absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-15 blur-[100px]"></div></div>
      <SignIn />
    </div>
  );
}