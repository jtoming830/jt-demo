type Genre =
  | 'comedy'
  | 'horror'
  | 'fantasy'
  | 'drama'
  | 'action'
  | 'sci-fi'
  | 'crime'
  | 'biography'
  | 'history'
  | 'adventure'
  | 'thriller'
  | 'mystery'

export type Movie = {
  id: string
  updatedAt: Date
  createdAt: Date
  title?: string
  image?: string
  score?: number
  description?: string
  comment?: string
  year?: number
  watched?: boolean
  genre?: Genre[]
  links?: string[]
}
