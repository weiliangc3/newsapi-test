import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import Link from 'next/link';
import Title from '../components/atoms/Title/Title';
import theme from '../components/theme';
import { News } from '../utils/interfaces/News';
import ArticleCardList from '../components/organism/ArticleCardList';
import Tagline from '../components/atoms/Tagline/Tagline';

const Home: NextPage<Props> = ({ news, query }: Props) => {
  const { articles, totalResults } = news || {};

  return (
    <ThemeProvider theme={theme}>
      <Title>The Noose</Title>
      <Tagline>
        Life&apos;s a bitch and then you die.
      </Tagline>

      {query ? (
        <>
          <p>
            {'You searched for '}
            <span>{decodeURI(query)}</span>
          </p>
          <p>
            <span>{totalResults}</span>
            {' articles found'}
          </p>
          <ArticleCardList articles={articles} />
        </>
      ) : (
        <p>No search term provided</p>
      )}
      <Link href="/">Back to home</Link>
    </ThemeProvider>
  );
};

interface Props {
  news: News,
  query?: string
}

export const getServerSideProps: GetServerSideProps = async (cxt) => {
  const queryString = cxt.query?.rope;
  if (!queryString) {
    return { props: { query: null } };
  }

  const fetchResponse = await fetch(`http://localhost:3000/api/news?query=${queryString}`);
  const news = await fetchResponse.json();

  return {
    props: { news, query: queryString },
  };
};

export default Home;
