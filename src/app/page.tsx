'use client'

import Card from '@/app/components/card/Card'
import type { CardItem, FilterStatus } from '@/app/types'
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const handleClick = () => {}
  const [filteredStatus, setFilteredStatus] = useState<FilterStatus>('all')
  const filterItemList = [
    { status: 'all', label: 'すべて' },
    { status: 'want', label: '読みたい' },
    { status: 'unread', label: '積んでる' },
    { status: 'reading', label: '読んでる' },
    { status: 'done', label: '読んだ' },
  ] as const
  const cardItems: CardItem[] = [
    {
      id: '1',
      title: '積読しているすごい本',
      author: 'サクッと作郎',
      status: 'want',
      filteredStatus,
      image: { src: '/tsundocle.svg', alt: 'tsundocle' },
    },
    {
      id: '2',
      title: '積読しているすごい本',
      author: 'サクッと作郎',
      status: 'unread',
      filteredStatus,
      image: { src: '/vercel.svg', alt: 'vercel' },
    },
    {
      id: '3',
      title: '積読しているすごい本',
      author: 'サクッと作郎',
      status: 'reading',
      filteredStatus,
      image: { src: '/window.svg', alt: 'window' },
    },
    {
      id: '4',
      title: '積読しているすごい本',
      author: 'サクッと作郎',
      status: 'done',
      filteredStatus,
      image: { src: '/file.svg', alt: 'file' },
    },
  ]

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.contentHeader}>
        <h2 className={styles.contentTitle}>Book Shelf</h2>
        <button className={styles.contentAddButton} type="button" onClick={handleClick}>
          + 新しい本を登録
        </button>
      </div>

      <div className={styles.amountCardList}>
        <div className={styles.amountCard}>
          <div className={styles.amountCardTitle}>総購入金額</div>
          ¥10,000
        </div>
        <div className={styles.amountCard}>
          <div className={styles.amountCardTitle}>今月の購入金額</div>
          ¥10,000
        </div>
        <div className={styles.amountCard}>
          <div className={styles.amountCardTitle}>積読総額</div>
          <span className={styles.amountCardEmphasisText}>¥100,000</span>
        </div>
      </div>

      <div className={styles.listWrapper}>
        <div className={styles.listFilterWrapper}>
          <div className={styles.listFilter}>
            <span>フィルター：</span>
            {filterItemList.map(({ status, label }) => (
              <button
                key={status}
                className={`${styles.listFilterButton} ${filteredStatus === status ? styles.activeFilter : styles.inactiveFilter}`}
                onClick={() => setFilteredStatus(status)}
                disabled={filteredStatus === status}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>
          <select name="genre" id="genre" className={styles.listFilterSelect}>
            <option value="">ジャンル絞り込みなし</option>
            <option value="novel">小説</option>
            <option value="business">ビジネス</option>
            <option value="tech">技術書</option>
          </select>
        </div>

        <div className={styles.listCardWrapper}>
          {cardItems.map(({ id, title, author, status, filteredStatus, image }) => (
            <Card
              key={id}
              id={id}
              title={title}
              author={author}
              status={status}
              filteredStatus={filteredStatus}
              image={image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
