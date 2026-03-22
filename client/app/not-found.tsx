import Link from "next/link"
export default function NotFound() {
    return (
        <div>
            <h1 className="text-blue-400 text-5xl text-center">This page is not available</h1>
            <Link href="/">
                <button className="border-8 w-full h-11 rounded text-black cursor-pointer bg-gray-400 hover:bg-gray-700  ">
                    Click Here to go on home page
                </button>
            </Link>
        </div>
    )
}