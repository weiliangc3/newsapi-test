/* eslint-disable react/no-array-index-key */
import React, { FunctionComponent } from 'react';
import { Article } from '../../utils/interfaces/News';
import ArticleCard from '../molecule/ArticleCard';

// index used for simplicity, as index position does not change here
const ArticleCardList: FunctionComponent<Props> = ({ articles }: Props) => (
  <div>
    {articles.map((article, index) => <ArticleCard article={article} key={`article_${index}`} />)}
  </div>
);

export default ArticleCardList;

interface Props{
  articles: Array<Article>
}
