"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import custom from "@/app/custom.module.css"
import style from "@/app/style.module.css"
const Home = () => {
    const apple = () => {
        alert("Fruits");
    }
    const Newapple = (item: string) => {
        alert(item);
    }
    const [color, setColor] = useState("red");
    const { red } = style;
    return (
        <div>
            <h1 className='text-center text-2xl border-2'>Events , Functions and State </h1>
            <button className='text-center border-2 rounded-2xl cursor-pointer m-2 p-2' onClick={() => alert("Button Clicked")}>Click Me</button>
            <button className='text-center border-2 rounded-2xl cursor-pointer m-2 p-2' onClick={apple}>Click Me 2</button>
            <button className='text-center border-2 rounded-2xl cursor-pointer m-2 p-2' onClick={() => Newapple("Fruits")}>Click Me 3</button>
            <Link href="/">Go To HomePage</Link>
            <h1 className={custom.heading}>Text Module CSS</h1>

            <h2 className={color == 'red' ? style.red : style.green}>Condition with Style</h2>
            <h3 style={{ backgroundColor: color == 'red' ? 'red' : 'green' }}>Heading 3</h3>
            <h4 id={style.orange}>Heading 4</h4>

            <h5 className={red}>Dummy Text</h5>
            <h5 className={red}>Dummy Text</h5>
            <h5 className={red}>Dummy Text</h5>
            <h5 className={red}>Dummy Text</h5>

            <button onClick={() => setColor("green")}>Update Color</button>
        </div>
    )
}

export default Home;