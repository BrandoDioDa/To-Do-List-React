import Image from 'next/image'
import profilePic from './images/comrade_ivan.jpg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import styles from './page.module.css'


export default function Home() {
  return (
    <div>
        <main className={styles.main}>
          <section className={styles.content}>
            <div className={styles.headshot}>
              <Image src={profilePic} alt="Picture of Brandon" priority={true}/>
            </div>
            <div className={styles.introduction}>
              <h1>Welcome to my Website Portfolio</h1>
            </div>
            <div className={styles.description}>
              <h1>This is my description</h1>
            </div>
          </section>
        </main>
    </div>
  )
}