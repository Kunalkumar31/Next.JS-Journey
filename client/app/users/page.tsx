

type item = {
    id: number;
    firstName: string;
    lastName: string

}
async function UserList() {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    return data.users;


}
export default async function page() {
    const users = await UserList();
    console.log(users);
    return (
        <div>
            <h1>User Name List: </h1>
            {
                users.map((item: item) => (
                    <div key={item.id}>
                        <h2>User Name: {item.id} {item.firstName} {item.lastName}</h2>
                    </div>
                ))
            }
        </div>
    )
}