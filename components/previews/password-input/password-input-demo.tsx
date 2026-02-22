import { PasswordInput } from "@/registry/flowui/components/password-input";

const PasswordInputDemo = () => {
    return (
        <div className="w-full max-w-sm mx-auto space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Password
            </label>
            <PasswordInput
                placeholder="Enter your password"
            />
        </div>
    );
}

export default PasswordInputDemo;
