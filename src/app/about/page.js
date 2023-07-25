import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill={true} alt="about hero" />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDescription}>Handcrafting award winning digital expressions</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.description}>loremkjsd flkjsd flkjsdf lksjdf lksjdf lksjdf lksdjf lksdj flksjd flksdj flksdj flksjd fl lskjdfl sdjf lksjd fls djflksjd flksjd flksdj flksdj flksdjf lksdj sfsd sdf sd fs df sdf s df sd fs df sd f sdf flksdj flksdj flksdjf kjd flksj dflksdj flkdsfj <br /><br /> lksdjflksd jflksdj flsdj f sdf sd fsd fs df sdf sd fssdfsdfs dfsdfsd fsdf sdf as dfasdfa sdfasdf asdf asdf asd fasdf as dfasd f df sd f sdf sdf  sdf slskdjf lsdkjf lskdjf </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>What We Do</h1>
        <p className={styles.description}>loremkjsd flkjsd flkjsdf lksjdf lksjdf lksjdf lksdjf <br /><br />lksdj flksjd flksdj flksdj flksjd fl lskjdfl sdjf lksjd fls djflksjd flksjd flksdj flksdj flksdjf lksdj sfsd sdf sd fs df sdf s df sd fs df sd f sdf flksdj flksdj flksdjf kjd flksj dflksdj flkdsfj 
        </p>
        <Button url="contact" text="Contact" />
        </div>
      </div>
      
    </div>
  )
}

export default About
