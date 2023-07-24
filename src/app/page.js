import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Welcome to my portfolio page. lorem ipsum  
        </h1>
        <p className={styles.description}>
          kljsdlf ksdlk fjlskdj flksdj flksj dflksj dflksj dflksj dflkj l sldfj lksdj flksdjf ldks jfsd flksdj flkdsj f lksdjf lksdj flksdjf 
        </p>
        <button className={styles.button}>See My Work</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='hero image' className={styles.img} />
        </div>
      </div>
  )
}
