import { Content } from "./content";
import { Tweets } from "../tweets";
import { Showcase } from "./showcase";
import { CommonLayout } from "../common-layout";
import { Divider } from "../divider";

const LandingPage = () => {
    return (
        <CommonLayout>
            {/* Content */}

            {/* This height cause, I want the center container to be minimum of entire screen - navbar */}
            <div className="min-h-[calc(100vh-76px)] flex flex-col gap-10 font-poppins pt-10 px-10">
                <Content />
                <Showcase />
            </div>

            <Divider type="screen" />

            <div className="px-10 py-5">
                <h1 className="font-caveat text-4xl">What devs say ?</h1>
                <Tweets />
                <div className="h-20 flex flex-1 justify-center items-center rounded-lg relative mt-5">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,currentColor_0px,currentColor_1px,transparent_1px,transparent_12px)] opacity-[0.05] dark:opacity-[0.1]" />
                    <h1 className="font-mono text-sm text-gray-500 text-center z-10">
                        Waiting for more feedbacks :)
                    </h1>
                </div>
            </div>
        </CommonLayout>
    )
}

export default LandingPage;