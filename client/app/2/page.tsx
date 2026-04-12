"use client"
import { Route } from 'next';
import Image from 'next/image'
// import profile from "@/public/next.svg"
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
            {/* 
            <Image
                src={profile}
                alt="Profile-img"
            /> */}
            <Image 
                src="https://images.pexels.com/photos/17541770/pexels-photo-17541770.jpeg"
                width={400}
                height={400} alt={''} />
                <h2 style={{fontFamily:'roboto', fontWeight:'100'}} className='text-4xl text-center'>Font optimization</h2>
                <h2 className='text-4xl text-center'>Font optimization</h2>
                
                
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