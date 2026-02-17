import { GoogleAuthButton, GithubAuthButton } from "@/registry/flowui/components/auth-buttons";

export function GoogleExample() {
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm">
            <GoogleAuthButton />
            <GoogleAuthButton variant="outline" text="Sign in with Google" />
            <GoogleAuthButton variant="secondary" className="w-full" />
        </div>
    )
}

export function GithubExample() {
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm">
            <GithubAuthButton />
            <GithubAuthButton variant="outline" text="Login with Github" />
            <GithubAuthButton variant="ghost" />
        </div>
    )
}
