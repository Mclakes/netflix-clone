import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';

const Container = styled.div;

const Signup = () => {
  return (
    <Container>
        <BackgroundImage />
        <Header />
        <div className="body flex column a-center j-center"></div>
    </Container>
  )
}

export default Signup