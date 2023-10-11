export default async () => {
    let dd = "bello"
    let dd2 = "bello2"
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
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/test`,
            {cache: "no-cache",
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }})
        const result =  await response.json();
        dd2 = result.test;
    } catch (e) {
        console.log("error fetch front22"+e)

    }


    return(<h1>{dd2}Hello {dd}!</h1>);
}