'use client'
import Link from 'next/link';
import styles from './authLinks.module.css'

export const AuthLinks = () => {
  const status = 'notauth';
  return (
    <>
      {
        status === 'notauth' ? (
          <Link href='/login'>Login</Link>
        ) : (
          <>
            <Link href='/write'>Write</Link>
            <span>Logout</span>
          </>
        )}
        <div className={styles.burguer}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
    </>
  )
}
