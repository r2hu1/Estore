import Link from "next/link";
import { Badge } from "./ui/badge";

export default function Product({ link, image, price, name }) {
    return (
        <div className="border rounded-md w-fit bg-background dark:bg-secondary p-1 transition hover:scale-105">
            <Link href={link} className="relative hover:">
                <img className="rounded-md md:h-[200px] md:w-[300px] w-full h-full min-h-[200px] max-h-[200px] max-w-[350px]" src={image} alt="thumbnail" />
            </Link>
            <Link href={link}>
                <div className="px-5 py-4 mt-1 flex justify-between items-center">
                    <h1 className="text-lg">{name}</h1>
                    <Badge>{price}</Badge>
                </div>
            </Link>
        </div>
    );
}