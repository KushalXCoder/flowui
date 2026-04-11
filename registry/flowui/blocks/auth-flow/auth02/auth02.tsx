import { Login } from "./components/login"

export const Auth02 = () => {
    return (
        <div className="h-screen w-screen flex bg-white rounded-lg">
            <div className="h-full w-1/2 border-r">
                <Login />
            </div>
            <div className="h-full w-1/2 bg-[repeating-linear-gradient(45deg,#e5e7eb_0px,#e5e7eb_1px,transparent_1px,transparent_10px)] flex justify-center items-center">
                <h1 className="text-sm text-gray-500">Place any picture or video or anything you like</h1>
            </div>
        </div>
    )
}