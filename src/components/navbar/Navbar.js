'use client'
import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

const Navbar = () => {
  const session = useSession();
  console.log

  return (
    <div className={styles.container}>
        <Link className={styles.logo} href="/">Rob Merrill | Web Developer</Link>
        <div className={styles.links}>
          <DarkModeToggle />
           {links.map(link => <Link className={styles.link} key={link.id} href={link.url}>{link.title}</Link>)}
        </div>
        {
          session.status === "authenticated" && (
        <button className={styles.logout} onClick={signOut}>Log Out</button>

          )
        }
    </div>
  )
}

export default Navbar