import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  console.log('hello')
  return (
    <div className={styles.container}>
        <div>&copy;Rob Merrill. All rights reserved</div>
        <div></div>
    </div>
  )
}

export default Footer