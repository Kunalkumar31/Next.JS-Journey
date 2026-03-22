"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"


const Login = () => {
    const router = useRouter();
    const navigate = (page:string) => {
        router.push("/login/" + page);
    }
    return (
        <div>
            <h1 className="text-xl text-center text-yellow-300">Login Page</h1>
            <Link href="/about">Go To About Page</Link>

            <button onClick={() => navigate("loginstudent")} className="border-2 rounded px-4 py-2">Go To Student Login Page</button>
            <button onClick={() => navigate("loginteacher")} className="border-2 rounded px-4 py-2">Go To Teacher Login Page</button>
        </div>
    )
}
export default Login;