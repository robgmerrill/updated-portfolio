import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  console.log('hello')
  return (
    <div className={styles.container}>
        <div>&copy;Rob Merrill. All rights reserved</div>
        <div className={styles.social}>
          <Image className={styles.icon} src="/1.png" width={15} height={15} alt="facebook image" />
          <Image className={styles.icon} src="/2.png" width={15} height={15} alt="instagram image" />
          <Image className={styles.icon} src="/3.png" width={15} height={15} alt="twitter image" />
          <Image className={styles.icon} src="/4.png" width={15} height={15} alt="youtube image" />
        </div>
    </div>
  )
}

export default Footer