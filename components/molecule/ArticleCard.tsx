import React, { FunctionComponent, useState } from 'react';
import { Article } from '../../utils/interfaces/News';
import { ArticleCardContainer, AutosizingImage } from './HelperComponents';

const ArticleCard: FunctionComponent<Props> = ({ article }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handleKeyDown = (e: any) => {
    if (e?.key === 'Enter' || e?.key === 'Space') {
      handleClick();
    }
  };

  return (
    <ArticleCardContainer role="button" onClick={handleClick} tabIndex={0} onKeyDown={handleKeyDown}>
      {article.title}
      {expanded && (
        <div>
          <AutosizingImage src={article.urlToImage} alt={`Article for ${article.title}`} />
          <div>{article.content}</div>
          <a href={article.url}>See more</a>
        </div>
      )}
    </ArticleCardContainer>
  );
};

export default ArticleCard;

interface Props{
  article: Article,
}
