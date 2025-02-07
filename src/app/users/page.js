export default async function usersPage() {
    const usersData = await fetch(`https://dummyjson.com/users`);
    console.log(usersData);
    const parsedData = await usersData.json();
    console.log(parsedData)
    return (
        <h1>Users Page General</h1>
    )
}