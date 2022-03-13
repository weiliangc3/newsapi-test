import React, { FunctionComponent, useState } from 'react';
import { Article } from '../../utils/interfaces/News';

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
    <div role="button" onClick={handleClick} tabIndex={0} onKeyDown={handleKeyDown}>
      {article.title}
      {expanded && (
        <div>
          <img src={article.urlToImage} alt={`Article for ${article.title}`} />
          {article.content}
          <a href={article.url}>See more</a>
        </div>
      )}
    </div>
  );
};

export default ArticleCard;

interface Props{
  article: Article,
}
