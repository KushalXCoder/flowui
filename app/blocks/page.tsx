import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { File } from "lucide-react";
import Link from "next/link";

const Page = () => {
    const categories = ["Auth", "Other"];
    return (
        <div className="grid grid-cols-5 gap-8 mt-4">
            {categories.map((category) => (
                <Link href={`/blocks/${category.toLowerCase()}`} key={category}>
                    <div className="flex flex-col gap-3">
                        <div key={category} className="relative h-50 flex justify-end items-end border border-dashed bg-accent hover:border-gray-400 hover:rounded-sm transition-all group overflow-hidden">
                            <div className="absolute -bottom-2 -right-2 h-40 w-60 rounded-tl-lg bg-white rotate-2 group-hover:shadow-sm group-hover:rotate-0 group-hover:right-0 group-hover:bottom-0 transition-all">
                                <div className="size-full flex flex-col text-sm px-5 py-3">
                                    <div className="flex flex-col gap-1 mt-2">
                                        <Label className="text-[12px]">Username</Label>
                                        <Input placeholder="Username" className="text-[8px]" disabled />
                                    </div>
                                    <div className="flex flex-col gap-1 mt-4">
                                        <Label className="text-[12px]">Password</Label>
                                        <Input placeholder="Password" className="text-[8px]" disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-between items-center px-2">
                            <h1>{category}</h1>
                            <p className="flex items-center gap-2">3 <File className="size-4" /></p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Page;