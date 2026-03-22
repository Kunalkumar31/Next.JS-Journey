"use client"
import "./login.css"
import Link from "next/link";
import { usePathname } from "next/navigation";
type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <div>
            {
                pathName != "/login/loginteacher" ? (
                    <>
                        <h1 className="text-center text-2xl p-2">Common Layout for login screen</h1>
                        <ul className="login">
                            {/* <li>
                            <Link href="/login">Login Main</Link></li> */}
                            <li>
                                <Link href="/login/loginstudent">Student Login</Link>
                            </li>
                            <li>
                                <Link href="/login/loginteacher">Teacher Login</Link>
                            </li>
                        </ul>
                    </>
                ) : <Link href="/login"> Go to login-page</Link>
            }

            {children}
        </div>
    )
}