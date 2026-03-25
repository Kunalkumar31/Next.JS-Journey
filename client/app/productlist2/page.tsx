
type Product = {
    id: number;
    title: string;

}
//This function will return a list of products in the future
async function productlist(): Promise<Product[]> {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
}
export default async function Page() {
    const products = await productlist();
    console.log(products);
    return (
        <div>
            <h1 className="text-3xl">Product List</h1>
            {
                products.map((item) => (
                    <div key={item.id}>
                        <h1>
                            {item.id}
                            {item.title}
                        </h1>
                    </div>
                ))
            }
        </div>
    )
}


/* 
  type Product

- “What does one item look like?”

2. Promise<Product[]>

- “I will give you a list of products later (async)”

3. await

- “Wait until data arrives”

4. .map()

- “Repeat UI for each item”

5. key={item.id}

- “Each item must be uniquely identifiable”

API → fetch() → JSON → products array → map() → JSX → UI
*/