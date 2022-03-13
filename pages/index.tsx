import React, { useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import Title from '../components/atoms/Title/Title';
import theme from '../components/theme';
import { News } from '../utils/interfaces/News';
import ArticleCardList from '../components/organism/ArticleCardList';
import Tagline from '../components/atoms/Tagline/Tagline';
import Subheader from '../components/atoms/Subheader/Subheader';

const Home: NextPage<Props> = ({ news }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const { articles } = news;

  const handleSubmit = () => {
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    router.push(`/news?rope=${encodedSearchTerm}`);
  };
  const handleKeyDown = (e: any) => {
    if (e?.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Title>The Noose</Title>
      <Tagline>
        Life&apos;s a bitch and then you die.
      </Tagline>

      <input
        type="text"
        value={searchTerm}
        data-testid="search-box"
        onChange={(e) => { setSearchTerm(e.target.value); }}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleSubmit}>Get yer noose here</button>

      <Subheader>Top news</Subheader>
      <ArticleCardList articles={articles} />
    </ThemeProvider>
  );
};

interface Props {
  news: News,
}

export const getServerSideProps: GetServerSideProps = async () => {
  const fetchResponse = await fetch('http://localhost:3000/api/topnews');
  const news = await fetchResponse.json();

  return {
    props: { news },
  };
};

export default Home;
