import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ForgotPassword = () => {
    return (
        <Dialog>
            <DialogTrigger className="ml-auto inline-block">
                <a className="text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                </a>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm font-mono">
                <DialogHeader>
                    <DialogTitle>Change your password</DialogTitle>
                    <DialogDescription>
                    Enter your registered email address and we will send you instructions
                    to reset your password.
                    </DialogDescription>
                </DialogHeader>
                <FieldGroup>
                    <Field>
                        <Label htmlFor="email-1">Email</Label>
                        <Input id="email-1" name="email" type="email" defaultValue="pedro@duarte.com" />
                    </Field>
                </FieldGroup>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Send</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}