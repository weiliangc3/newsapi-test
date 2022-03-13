import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import Title from '../components/atoms/Title/Title';
import theme from '../components/theme';

const Home: NextPage = () => {
  console.log('env', process.env.APIKEY);
  return (
    <ThemeProvider theme={theme}>
      <Title>The Noose</Title>
    </ThemeProvider>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getServerSideProps: GetServerSideProps = async (cxt) => ({
  props: {}, // will be passed to the page component as props
});

export default Home;
