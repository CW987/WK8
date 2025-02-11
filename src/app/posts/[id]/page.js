import { db } from "@/utils/dbConnection";

export default async function postsPage({ params }) {
    const postPage = await params;
    console.log(postPage);
    const postData = await db.query(`SELECT [id] FROM "blogposts"`);
    const parsedData = await postData.json();
    return (
        <>
        <h1>Username page: {postId.id}</h1>;
        <h2> {parsedData.title} </h2>
        <h3> {parsedData.author} </h3>
        <p> {parsedData.blogpost} </p>
        </>
    )
}