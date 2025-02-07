export default async function IdPage({ params }) {
    const userId = await params;
    console.log(userId);
    const usernameData = await fetch(`https://dummyjson.com/users/${userId.id}`);
    const parsedData = await usernameData.json();
    return (
        <>
        <h1>Username page: {userId.id}</h1>;
        <h2> {parsedData.firstName} </h2>
        <h2> {parsedData.lastName} </h2>
        <p> {parsedData.email} </p>
        </>
    )
}