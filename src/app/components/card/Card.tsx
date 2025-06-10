import type { Status } from '@/app/types'
import Image from 'next/image'
import styles from './card.module.css'

type Props = {
  title: string
  author: string
  image: {
    src: string
    alt: string
  }
  status: Status
}

export default function Card({ title, author, image, status }: Props) {
  const statusLabel = (status: Status) => {
    switch (status) {
      case 'want':
        return '読みたい'
      case 'unread':
        return '積んでる'
      case 'reading':
        return '読んでる'
      case 'done':
        return '読んだ'
      default:
        return 'ステータスが不正です'
    }
  }
  return (
    <div className={styles.card}>
      <Image
        src={image.src}
        alt={image.alt}
        width={100}
        height={288}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>{title}</div>
        <span className={styles.cardAuthor}>{author}</span>
        <span className={`${styles.cardStatus} ${styles[status]}`}>{statusLabel(status)}</span>
      </div>
    </div>
  )
}
