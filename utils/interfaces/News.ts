export interface Source {
  id?: number,
  name: string,
}

export interface Article {
  source: Source
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string,
}

export interface News {
  status: string
  totalResults: number
  articles: Array<Article>
}
