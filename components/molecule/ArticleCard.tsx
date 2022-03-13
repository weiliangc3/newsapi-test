import React, { FunctionComponent } from 'react';
import { Article } from '../../utils/interfaces/News';

const ArticleCard: FunctionComponent<Props> = ({ article }: Props) => (
  <div>{article.title}</div>
);

export default ArticleCard;

interface Props{
  article: Article,
}
