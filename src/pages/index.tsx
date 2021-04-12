import React from 'react'
import Head from 'next/head'

import RocketSeatLogo from '../assets/rocketseat.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>New Cofig server</title>
      </Head>

      <RocketSeatLogo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + NextJS structure made by Rocketseat.</p>
    </Container>
  )
}

export default Home
