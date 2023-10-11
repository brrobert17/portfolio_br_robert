import styles from './page.module.css'
import BasicFetch from "@/app/components/BasicFetch";
export default async function Home() {

    return (
        <main className={styles.main}>
            <BasicFetch/>
        </main>
    )
}

