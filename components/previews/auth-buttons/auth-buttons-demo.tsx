import { AuthButton } from "@/registry/flowui/components/auth-buttons";

export default function AuthButtonsDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <AuthButton provider="google" text="Continue with Google" />
            <AuthButton provider="github" text="Continue with Github" variant="outline" />
        </div>
    );
}
