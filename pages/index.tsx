import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ThemeProvider } from 'styled-components'
import Title from '../components/atoms/Title'
import theme from '../components/theme'

const Home: NextPage = () => {
  console.log('env', process.env.APIKEY)
  return (
    <>
      <ThemeProvider theme={theme}>
        <Title>The Noose</Title>
      </ThemeProvider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (cxt) => {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home
