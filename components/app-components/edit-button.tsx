import { Edit } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

type EditButtonProps = {
    link: string;
};

const EditButton = ({ link } : EditButtonProps) => {
    const baseUrl = "https://github.com/KushalXCoder/flowui/tree/main/content/docs";
    const url = `${baseUrl}/${link}`;
    return (
        <Link href={url} target="_blank">
            <button className="flex justify-center items-center gap-2 text-[12px] bg-fd-secondary hover:bg-fd-accent rounded-sm px-2 py-1 border border-fd-accent font-sans font-medium cursor-pointer">
                <Edit className="size-3.5" />
                Edit on GitHub
            </button>
        </Link>
    )
}

export default EditButton;