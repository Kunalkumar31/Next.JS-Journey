
interface User {
    name: string,
    id: number
}
const UserDetails = ({ name, id }: User) => {
    return (
        <div className="flex border-2 rounded m-2 p-2">
            <h2>User Id is : {id}</h2>
            <h2>User name is : {name}</h2>
        </div>
    )

}

export default UserDetails;