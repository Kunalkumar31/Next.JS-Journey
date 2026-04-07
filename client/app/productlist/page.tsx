'use client'

import { useEffect, useState } from "react"
import NewProduct from "./Newproduct";

type Product = {
    id: number;
    title: string;
    price: number;
}
export default function Page() {
    const [product, setProduct] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true)

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
            finally {
                setLoading(false) // stop loading
            }
        };
        fetchData();

    }, [])

    //  Show loader while fetching
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"> Product List...</div>
            </div>
        )
    }
    return (
        <div>
            <h1 className="text-center text-2xl p-3">Fetch Data with API in client component </h1>
            {
                product.map((item) => (
                    <h2 className="border-2 p-3 bg-amber-600 text-2xl" key={item.id}> Product List
                        <span className="m-2">{item.id}</span> -{" "}
                        <span>{item.title} </span> - ₹{item.price}
                        <NewProduct price={item.price} />

                    </h2>
                ))
            }

        </div>
    )
}

/* 
1. Page loads
2. product = []
3. UI renders (empty list)
4. useEffect runs
5. fetch data
6. setProduct()
7. React re-renders
8. products now visible

| Feature    | Server Component    | Client Component           |
| ---------- | ------------------- | -------------------------- |
| Data fetch | Before render       | After render               |
| Hooks      | ❌ Not allowed       | ✅ Allowed                  |
| Speed      | Faster initial load | Slight delay               |
| Example    | `async Page()`      | `'use client' + useEffect` |


Real-life analogy

Think of it like:

You order food 🍔

loading = true → waiting for food
try → food arrives
catch → order failed
finally → you stop waiting (either way)

*/