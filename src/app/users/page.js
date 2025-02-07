export default async function usersPage() {
    const usersData = await fetch(`https://dummyjson.com/users`);
    console.log("fetch complete");
    const parsedData = await usersData.json();
    console.log("parsing")
    const wrangledData = parsedData.users;
    console.log(wrangledData)
    return (
        <>
        <h1>Users Page General</h1>
        {
            wrangledData.map((user) => (
            <div key={user.id}>
                <h2>{user.firstName} {user.lastName}</h2>
                <p>{user.age}</p>
            </div>
            ))
        }
        </>
    )
}