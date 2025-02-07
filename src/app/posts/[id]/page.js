export default async function PostPage({ params }) {
    const idParams = await params;
    console.log(idParams);
    return (
        <>
        <h2>Post page</h2>; //! [change me]
        <p>I am page {idParams.id} </p>;
        </>
    )
}