import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContent} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero
      titleText={faqContent.title}
      image={faqContent.image} />
    <p>{faqContent.text}</p>
  </Container>
);

export default FAQ;