"use client"
import { Route } from 'next';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
const Home = () => {

    const router = useRouter();
    const naviagte = (name: Route) => {
        router.push(name);
    }
    const [name, SetName] = useState("Default");


    return (
        <div>
            <h1 className='text-center text-2xl border-2'>State: {name}</h1>
            <button className='border-2 rounded-2xl cursor-pointer m-2 p-2' onClick={() => SetName("Ram")}> Click Me </button>
            <button className='border-2 rounded-2xl cursor-pointer m-2 p-2' onClick={() => SetName("Shyam")}> Click Me 2 </button>
            <InnerComponent />

            <button onClick={() => { naviagte("/") }} className='p-2 m-2  border-2 rounded cursor-pointer'>Go to HomePage</button>

        </div>
    )
}

// Make Component
const InnerComponent = () => {
    return (
        <div>
            <h1>Inner Component</h1>

        </div>
    )
}
export default Home;