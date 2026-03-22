"use client"
import Link from "next/link";
const AboutCollege = () => {
    return (
        <div>
            <h1>
                About your College
            </h1>

             <Link href="/about">
                <button className="border-2 rounded px-4 py-2" >
                    Go to About Page
                </button>
            </Link>
        </div>
    )
}
export default AboutCollege;