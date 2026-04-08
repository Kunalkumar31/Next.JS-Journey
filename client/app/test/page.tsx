"use client"

import { useState } from "react"

export default function Test() {
    const [h2styel,setH3Sty]= useState({
        color:"red",
        fontSize:"20px",
    });
    return (
        <div>
            <h1 className="text-center text-3xl">Heading 1</h1>
            <h2 className="text-2xl p-3.5" style={h2styel}>Heading 2</h2>
            <button className="border-2 cursor-pointer" onClick={() => setH3Sty(prev => ({
                ...prev,
                color: "blue", fontSize:"40px"
            }))}>Upadte style</button>
        </div>
    )

}