import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ForgotPassword } from "../../auth01/components/forgot-password";
import { Button } from "@/components/ui/button";

export const Login = () => {
    return (
        <div className="h-full w-full flex items-center">
            <div className="max-w-lg w-full mx-auto">
                <h1 className="font-bold">Login to your account</h1>
                <p className="text-gray-500 text-sm">Enter your email below to login to your account</p>
                <form className="mt-5">
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </Field>
                        <Field>
                            <div className="flex items-center">
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <ForgotPassword />
                            </div>
                            <Input id="password" type="password" required />
                        </Field>
                        <Field>
                            <Button type="submit">Login</Button>
                            <Button variant="outline" type="button">
                                Login with Google
                            </Button>
                        </Field>
                    </FieldGroup>
                </form>
            </div>
        </div>
    )
}