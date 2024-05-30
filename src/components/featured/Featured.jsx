import Image from 'next/image'
import styles from './featured.module.css'

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hey, Lama dev here! <br />
        Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={'/travel.png'} alt='' fill  className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, nulla!</h1>
          <p className={styles.textDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione enim animi, autem similique
            maxime labore odit inventore sed, asperiores architecto repellat repudiandae cupiditate recusandae!
            Distinctio esse fugit tenetur vero eveniet.
          </p>
          <button  className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}
