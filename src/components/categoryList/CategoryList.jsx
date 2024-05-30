import Link from 'next/link'
import styles from './categoryList.module.css'
import Image from 'next/image'

export const CategoryList = () => {
  const tagsCateries = ['coding', 'style', 'culture', 'fashion', 'food', 'travel']
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {
          tagsCateries.map(cat => (
            <Link key={cat} href={`/blog?cat=${cat}`}
              className={`${styles.category} ${styles.style}`}
            >
              <Image src={`/${cat}.png`}
                alt=''
                width={32}
                height={32}
                className={styles.image}
              />
              {cat}
            </Link>
          ))
        }


      </div>
    </div>
  )
}
