import styles from './page.module.css'
const fetch1 = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/data`,{cache: "no-cache"})
    return  await response.json();
}

export default async function Home() {
    const result = await fetch1();
    return (
        <main className={styles.main}>
            <h1>Hello {result.name}!</h1>
        </main>
    )
}

