import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src='/p1.jpeg' alt='' fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span>11.02.2024</span>
          <span>Culture</span>
        </div>
        <Link href='/'>
          <h1>
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quo, mollitia ea? Vel nobis saepe rem voluptates consectetur corrupti,
          iure perferendis? Facilis, cum voluptatibus eveniet perferendis ullam
          perspiciatis eum. Neque, iusto.
        </p>
        <Link href='/'
          className={styles.link}
        >
          Read More
        </Link>
      </div>
    </div>
  )
}
