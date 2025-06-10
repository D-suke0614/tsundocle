'use client'

import styles from './page.module.css'

export default function Home() {
  const handleClick = () => {}

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
            <button className={`${styles.listFilterButton} ${styles.activeFilter}`} type="button">
              すべて
            </button>
            <button className={`${styles.listFilterButton} ${styles.inactiveFilter}`} type="button">
              読みたい
            </button>
            <button className={`${styles.listFilterButton} ${styles.inactiveFilter}`} type="button">
              読んでる
            </button>
            <button className={`${styles.listFilterButton} ${styles.inactiveFilter}`} type="button">
              積んでる
            </button>
            <button className={`${styles.listFilterButton} ${styles.inactiveFilter}`} type="button">
              読んだ
            </button>
          </div>
          <select name="genre" id="genre" className={styles.listFilterSelect}>
            <option value="">ジャンル絞り込みなし</option>
            <option value="novel">小説</option>
            <option value="business">ビジネス</option>
            <option value="tech">技術書</option>
          </select>
        </div>
        <div></div>
      </div>
    </div>
  )
}
