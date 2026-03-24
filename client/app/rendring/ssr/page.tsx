
type User = {
    id: number,
    name: string
}

export default  async function SSRPage(){
    //This runs on the server before page loads
    const  res = await fetch("https://jsonplaceholder.typicode.com/users",{
        cache:'no-store' // ensures SSR (fresh data every request)

    });

    const users: User[] = await res.json();
    return (
        <div>
            <h1 className="text-center text-lime-500 text-4xl">SSR Example</h1>
            {
                users.map((user) => (
                    <p className="border-2 text-center text-red-400" key={user.id}>{user.name}</p>
                ))
            }

        </div>
    )
}
/*
This code is Server-Side Rendering (SSR) in App Router.

The server fetches data → builds HTML → sends ready page to browser

Component is async
That means it runs on the server
You can use await directly

 * What does cache: 'no-store' mean?

“Don’t cache → always fetch fresh data”

So every request = new data
 That’s why this is SSR



 1. User requests page
2. Server runs SSRPage()
3. fetch() runs on server
4. Data is received
5. HTML is generated with user names
6. Ready page sent to browser
*/
