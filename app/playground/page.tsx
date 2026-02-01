"use client";

import DebouncedInput from "@/components/flowui/input";

const Playground = () => {
    return (
        <div className="h-screen px-30">
            <div className="h-full w-full flex flex-col border-x border-dashed border-gray-400 font-poppins">
                <div className="w-full border-b border-dashed border-gray-400 px-4 py-6">
                    <h1>This is a playground to test components</h1>
                </div>
                <div className="h-full p-5">
                    <div className="w-fit">
                        <h1 className="mb-4">Debounced Input</h1>
                        <DebouncedInput
                            debouncing
                            debouncingValue={1000}
                            onDebouncedChange={(value) => console.log("Debounced Value: ", value)}
                            placeholder="Type something..."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playground;