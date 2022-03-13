import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import Title from '../components/atoms/Title/Title';
import theme from '../components/theme';
import { News } from '../utils/interfaces/News';
import ArticleCard from '../components/molecule/ArticleCard';

const Home: NextPage<Props> = ({ news, query }: Props) => {
  const { articles } = news;

  return (
    <ThemeProvider theme={theme}>
      <Title>The Noose</Title>
      <p>
        {'You searched for '}
        <span>{decodeURI(query)}</span>
      </p>
      <p>
        <span>{articles.length}</span>
        {' articles found'}
      </p>
      {articles.map((article) => <ArticleCard article={article} />)}
    </ThemeProvider>
  );
};

interface Props {
  news: News,
  query: string
}

export const getServerSideProps: GetServerSideProps = async (cxt) => {
  const queryString = cxt.query.rope;

  const fetchResponse = await fetch(`http://localhost:3000/api/news?query=${queryString}`);
  const news = await fetchResponse.json();

  return {
    props: { news, query: queryString },
  };
};

export default Home;
