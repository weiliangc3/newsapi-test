import React, { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import Title from '../components/atoms/Title/Title';
import theme from '../components/theme';

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    router.push(`/news?rope=${encodedSearchTerm}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Title>The Noose</Title>

      Life&apos;s a bitch and then you die.

      <input
        type="text"
        value={searchTerm}
        data-testid="search-box"
        onChange={(e) => { setSearchTerm(e.target.value); }}
      />
      <button type="button" onClick={handleSubmit}>Get yer noose here</button>
    </ThemeProvider>
  );
};

export default Home;
