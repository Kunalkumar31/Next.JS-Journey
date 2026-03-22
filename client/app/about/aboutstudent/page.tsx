import Link from "next/link";
const AboutStudent = () => {
    return (
        <div>
            <h1>About Page for Student </h1>
             <button className="border-2 rounded px-4 py-2">
                <Link href="/about">Go to About page</Link>
                </button>
        </div>
    )
}
export default AboutStudent;