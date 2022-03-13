/* eslint-disable react/no-array-index-key */
import React, { FunctionComponent } from 'react';
import { Article } from '../../utils/interfaces/News';
import ArticleCard from '../molecule/ArticleCard';
import { ArticleCardContainer } from './HelperComponents';

// index used for simplicity, as index position does not change here
const ArticleCardList: FunctionComponent<Props> = ({ articles }: Props) => (
  <ArticleCardContainer>
    {articles.map((article, index) => <ArticleCard article={article} key={`article_${index}`} />)}
  </ArticleCardContainer>
);

export default ArticleCardList;

interface Props{
  articles: Array<Article>
}
