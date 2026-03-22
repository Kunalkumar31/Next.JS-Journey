import Link from "next/link";
const About = () => {
    return (
        <div>
            <h1>About Page</h1>

            <Link href="/about/aboutcollege">
                <button className="border-2 rounded px-4 py-2">
                    Go to About college Page
                </button>
            </Link>

            <Link href="/about/aboutstudent">
                <button className="border-2 rounded px-4 py-2" >
                    Go to About student Page
                </button>
            </Link>

            <Link href="/">
                <button className="border-2 rounded px-4 py-2" >
                    Go to Home page
                </button>
            </Link>
        </div>

    )
}
export default About;