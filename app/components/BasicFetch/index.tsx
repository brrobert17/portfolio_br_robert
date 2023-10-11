export default async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/data`,{cache: "no-cache"})
    const result =  await response.json();
    return(<h1>Hello {result.name}!</h1>);
}