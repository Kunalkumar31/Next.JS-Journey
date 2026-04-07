"use client"

export default function NewProduct({ price }: { price: number }) {
    return (
        <div>
            <button onClick={() => alert(price)} className="border-2 rounded cursor-pointer ">Check-Price</button>
        </div>
    )
}