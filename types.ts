export interface Format {
  string: string
}

export interface Person {
  birth_year: number | null
  death_year: number | null
  name: string
}

export interface Book {
  id: number
  title: string
  authors: Person[]
  translators: Person[]
  subjects: string[]
  bookshelves: string[]
  languages: string[]
  copyright: boolean | null
  media_type: string
  formats: Format
  download_count: number
}

export interface BooksResponse {
  count: number
  next: string | null
  previous: string | null
  results: Book[]
}

export interface Params {
  page?: number
  languages?: string[]
  copyright?: boolean
  search?: string
  sort?: 'ascending' | 'descending' | 'popular'
  topic?: string
}
