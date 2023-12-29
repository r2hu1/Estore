import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Image from "next/image"


export default function PreviewImage({ url }) {
    return (
        <Drawer>
            <DrawerTrigger className="w-full bg-background border rounded-md text-sm hover:bg-secondary transition">
                Preview
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerDescription>
                        <img height={200} width={200} src={url} className="w-full rounded-lg select-none pointer-events-none" />
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose>
                        <Button className="w-full">Close</Button>
                        <p className="text-xs mt-5">swipe down to close <span className="text-red-500">*</span></p>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}