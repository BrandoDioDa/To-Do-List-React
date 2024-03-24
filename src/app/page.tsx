import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
export default function Home() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <main className={styles.main}>
          <h1 className="text-danger">Hello Bootstrap</h1>
      </main>
    </div>
   
  )
}
