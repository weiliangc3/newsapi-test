import { Article, News, Source } from '../News';

export const SourceMock: Source = {
  id: 136,
  name: 'Mock Source Name',
};

export const ArticleMock: Article = {
  source: SourceMock,
  author: 'Mock aticle Author',
  title: 'Mock article name',
  description: 'Mock desc',
  url: 'https://mock.article',
  urlToImage: 'https://mock.article/image',
  publishedAt: 'mockpublishedatstring',
  content: 'Mock Article Content Of An Amazing Piece Of Journalistic Integrity',
};

export const NewsMock: News = {
  status: 'ok',
  totalResults: 20,
  articles: [
    ArticleMock,
  ],
};
