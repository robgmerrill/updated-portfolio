'use client'
import React from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Login = () => {

  const session = useSession();
  const router = useRouter();

  if (session.status === 'loading') {
    return <p>Loading....</p>
  }

  if (session.status === 'authenticated') {
    router?.push("/dashboard");
  }

  return (
    <div className={styles.container}>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  )
}

export default Login