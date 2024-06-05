import Navbar from './components/Navbar'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div>
        <main className={styles.main}>
          <h1 className="text-danger">Hello Bootstrap</h1>
        </main>
      </div>
    </div>
  )
}