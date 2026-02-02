import TextDivider from "@/components/previews/text-divider-demo"

const TestPage = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="h-100 w-100 border">
                <TextDivider
                    text="or"
                    className="font-poppins"
                    lineColor="bg-red-500"
                />
            </div>
        </div>
    )
}

export default TestPage;