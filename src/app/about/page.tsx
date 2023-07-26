async function page() {
    async function getData() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.

        // Recommendation: handle errors
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error("Failed to fetch data");
        }

        return res.json();
    }

    const data = await getData();

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data.map((post: any) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default page;
