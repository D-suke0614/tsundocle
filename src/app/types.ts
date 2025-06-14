export type Status = 'want' | 'unread' | 'reading' | 'done'

export type FilterStatus = Status | 'all'

export type CardItem = {
  id: string
  title: string
  author: string
  image: {
    src: string
    alt: string
  }
  status: Status
  filteredStatus: FilterStatus
}
