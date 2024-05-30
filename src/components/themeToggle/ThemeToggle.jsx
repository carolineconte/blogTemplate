"use client";
import { useContext } from 'react';
import styles from './themeToggle.module.css';
import { ThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';

export const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div className={styles.container}
      style={theme === 'dark'
        ? { background: 'white' }
        : { background: '#0f172a' }}
      onClick={toggle}>
      <Image src='/moon.png' width={10} height={15} alt='' />
      <div className={styles.boll}
        style={theme === 'dark'
          ? { left: 1, background: '#0f172a' }
          : { right: 1, background: 'white' }} ></div>
      <Image src='/sun.png' width={10} height={15} alt='' />
    </div>
  );
};