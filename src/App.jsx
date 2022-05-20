import React from 'react'
import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-secondary bg-gradient'>
      <Header />
      <Container />
      <Footer />
    </div>
  )
}

export default App