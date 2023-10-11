import styles from './page.module.css'
import {api} from "@/app/config/axios";

export default async function Home() {
    const response = await api.get('/data')
    const result = await response.data
    console.log(result.data);
    return (
        <main className={styles.main}>
            <h1>Hello {result.data.name}!</h1>
        </main>
    )
}

