'use client'

import { useEffect, useState } from "react"

type Product = {
    id: number;
    title: string;
    price: number;
}
export default function Page() {
    const [product, setProduct] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                console.log(data);
                setProduct(data.products);

            } catch (error) {
                console.log("Error: ", error)
            }
        };
        fetchData();

    }, [])

    return (
        <div>
            <h1 className="text-center text-2xl p-3">Product List</h1>
            {
                product.map((item) => (
                    <h2 className="border-2 p-3 bg-amber-600 text-2xl" key={item.id}> Product List
                        <span className="m-2">{item.id}</span>  - <span>{item.title}</span>
                    </h2>
                ))
            }
        </div>
    )
}