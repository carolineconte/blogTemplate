import Link from 'next/link'
import styles from './menuCategories.module.css'
export const MenuCategories = () => {
  const tagsCateries = ['coding', 'style', 'culture', 'fashion', 'food', 'travel']

  return (

    <div className={styles.categoryList}>
      {
        tagsCateries.map(cat => (
          <Link key={cat} href={`/blog?cat=${cat}`}
            className={`${styles.categoryTag} ${styles.style}`}
          >
            {cat}
          </Link>
        ))
      }
    </div>
  )
}
