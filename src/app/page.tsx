'use client'

import styles from './page.module.css'

export default function Home() {
  const handleClick = () => {}

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.listHeader}>
        <h2 className={styles.listTitle}>Book Shelf</h2>
        <button className={styles.listAddButton} type="button" onClick={handleClick}>
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
      <div></div>
    </div>
  )
}
