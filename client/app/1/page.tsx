"use client"
import React from 'react'
import Link from 'next/link'
const Home = () => {
    const apple = () => {
        alert("Fruits");
    }
    const Newapple = (item: string) => {
        alert(item);
    }
    return (
        <div>
            <h1 className='text-center text-2xl border-2'>Events , Functions and State </h1>
            <button className='text-center border-2 rounded-2xl cursor-pointer m-2 p-2' onClick={() => alert("Button Clicked")}>Click Me</button>
            <button className='text-center border-2 rounded-2xl cursor-pointer m-2 p-2' onClick={apple}>Click Me 2</button>
            <button className='text-center border-2 rounded-2xl cursor-pointer m-2 p-2' onClick={() => Newapple("Fruits")}>Click Me 3</button>
            <Link href="/">Go To HomePage</Link>
        </div>
    )
}

export default Home;