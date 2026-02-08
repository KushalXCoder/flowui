import { GoogleAuthButton, GithubAuthButton } from "@/registry/flowui/components/auth-buttons";

export default function AuthButtonsDemo() {
    return (
        <div className="flex flex-col gap-4">
            <GoogleAuthButton />
            <GithubAuthButton />
        </div>
    )
}
