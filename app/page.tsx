import styles from './page.module.css'

export default async function Home() {
    const response = await fetch('http://localhost:3000/api/data',{cache: "no-cache"})
    const result = await response.json();
    return (
        <main className={styles.main}>
            <h1>Hello {result.name}!</h1>
        </main>
    )
}

