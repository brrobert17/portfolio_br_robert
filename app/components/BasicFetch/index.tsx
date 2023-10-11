export default async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/data`,
        {cache: "no-cache",
        method: "GET",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }})
    const result =  await response.json();
    return(<h1>Hello {result.name}!</h1>);
}