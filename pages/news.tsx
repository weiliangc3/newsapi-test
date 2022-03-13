import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import Title from '../components/atoms/Title/Title';
import theme from '../components/theme';

const Home: NextPage = ({ news }) => (
  <ThemeProvider theme={theme}>
    <Title>The Noose</Title>
    then it slaps.
    {JSON.stringify(news)}
  </ThemeProvider>
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getServerSideProps: GetServerSideProps = async (cxt) => {
  const queryString = cxt.query.rope;

  const fetchResponse = await fetch(`http://localhost:3000/api/news?query=${queryString}`);
  const news = await fetchResponse.json();

  return {
    props: { news }, // will be passed to the page component as props
  };
};

export default Home;
