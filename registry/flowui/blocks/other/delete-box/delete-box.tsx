import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DeleteBoxForm } from "./components/form";

export const DeleteBox = () => {
    return (
        <div className="min-w-md">
            <Card>
                <CardHeader>
                    <CardTitle>Delete the content </CardTitle>
                    <CardDescription>
                        Type {""}
                        <span className="text-red-500">"Delete this content"</span>
                        {""} in the box below to confirm the deletion of the content.
                    </CardDescription>
                    <CardContent className="px-0 mt-3">
                        <DeleteBoxForm />
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    )
}