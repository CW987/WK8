import { db } from "@/utils/dbConnection";

export default async function Home() {
  try {
    const result = await db.query(`SELECT * FROM "blogposts"`);
    console.log("Supabase response:", result);
    const wrangledblogposts = result.rows;
    console.log(wrangledblogposts)

    return (
      <main>
        <h1>Wolves</h1>
          {wrangledblogposts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <h3> {post.author} </h3>
              <p> {post.blogpost} </p>
            </div>
          ))}
      </main>
    );
  } catch (error) {
    console.error("Database query failed:", error);
    return <main><h1>Error fetching data</h1><p>{error.message}</p></main>;
  }
}
