import Link from "next/link";

export default async function usersPage({ searchParams }) {
    
    const usersData = await fetch(`https://dummyjson.com/users`);
    console.log("fetch complete");
    const parsedData = await usersData.json();
    console.log("parsing");
    const wrangledData = parsedData.users;
    console.log(wrangledData);

    const query = await searchParams;
    if(query.sort === "desc") {
        wrangledData.reverse();
    }
    return (
        <>
        <h1>Users Page General</h1>
        <Link href={`/users?sort=asc`} >Ascending</Link>
        <Link href={`/users?sort=desc`}>Descending</Link>
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