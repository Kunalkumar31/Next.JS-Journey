'use client'
import { useEffect, useState } from "react"

type User = {
    id: number,
    name: string
}
export default function CSRPage() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);
    return (
        <div>
            <h1 className="text-center text-3xl">CSR Example</h1>
            {
                users.length == 0 ? (
                    <p className="text-amber-300 text-6xl text-center">Loding...</p>
                ) : (
                    users.map((user) => (
                        <p className="border-2 w-full text-2xl text-center text-blue-500" key={user.id}>{user.name}</p>
                    ))
                )
            }

        </div>
    )
}

/* 
Step 1: users = []
Step 2: UI shows → "Loading..."
Step 3: API call starts
Step 4: Data arrives
Step 5: users = data
Step 6: UI updates → show names

How to Think Like a Pro

When you see this code, think in 3 phases:

 .Phase 1: Initial Render
users = []
Shows → "Loading..."
 .Phase 2: Data Fetch
useEffect runs
API call happens
 .Phase 3: Re-render
users = data
UI updates → shows list
 One-line Summary

React shows UI → fetches data → updates state → re-renders UI
*/