export default async () => {
    let dd = "bello"
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/data`,
            {cache: "no-cache",
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }})
        const result =  await response.json();
        dd = result.data.name;
    } catch (e) {
        console.log("error fetch front"+e)
    }

    return(<h1>Hello {dd}!</h1>);
}