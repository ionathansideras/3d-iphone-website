import { Html } from "@react-three/drei";

export default function Loader() {
    return (
        <Html center>
            <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-400 rounded-full animate-spin"></div>
                <p className="mt-2 text-white text-lg font-semibold">
                    Loading...
                </p>
            </div>
        </Html>
    );
}
