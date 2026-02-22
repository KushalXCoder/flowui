import { AuthButton } from "@/registry/flowui/components/auth-buttons";

export function ProvidersExample() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <AuthButton variant="outline" provider="google" text="Google" />
            <AuthButton variant="outline" provider="github" text="Github" />
            <AuthButton variant="outline" provider="facebook" text="Facebook" />
            <AuthButton variant="outline" provider="apple" text="Apple" />
            <AuthButton variant="outline" provider="linkedin" text="LinkedIn" />
        </div>
    )
}

export function VariantsExample() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <AuthButton provider="google" variant="default" />
            <AuthButton provider="google" variant="outline" />
            <AuthButton provider="google" variant="secondary" />
            <AuthButton provider="google" variant="ghost" />
        </div>
    )
}

export function SizesExample() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <AuthButton provider="github" size="sm" text="Small" />
            <AuthButton provider="github" size="default" text="Default" />
            <AuthButton provider="github" size="lg" text="Large" />
        </div>
    )
}

export function CustomTextExample() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <AuthButton provider="google" text="Sign in with Google" className="w-[240px]" />
            <AuthButton provider="github" text="Login with GitHub" className="w-[240px]" variant="outline" />
        </div>
    )
}
