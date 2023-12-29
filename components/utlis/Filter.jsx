"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

export default function Filters({values}) {
    const [search, setSearch] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const router = useRouter();
    const handleSubmit = () => {
        if (search == "") return;
        setIsSearching(true);
        router.push(`/search/${search}`);
    };
    return (
        <div className="flex gap-3">
            <Select onValueChange={(e)=>{setSearch(e)}}>
                <SelectTrigger className="w-[190px]">
                    <SelectValue placeholder={values ||"All Products"} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="template">Website Templates</SelectItem>
                    <SelectItem value="ebook">E-Books</SelectItem>
                    <SelectItem value="icon">Icon Packs</SelectItem>
                </SelectContent>
            </Select>
            <Button onClick={handleSubmit}>{!isSearching ? "Search" : (<Loader className="animate-spin"/>)}</Button>
        </div>
    )
};