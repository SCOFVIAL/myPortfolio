import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { Span } from '../Header/HeaderStyles';
import Link from 'next/dist/client/link';

const Hero = (props) => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center >
      Hey<br />
      I'm Victor
    </SectionTitle>
    <SectionText>
    I am an aspiring software developer passionate about technology. Currently pursuing a Computer Science degree at Babcock University, I am focused on coding and developing skills in networking, cybersecurity, and software development. My enthusiasm drives me to explore innovative solutions and contribute to tech projects that push boundaries.</SectionText>
    <Button>
      <Link href="#about">About</Link>
    </Button>
    
  </LeftSection>

 </Section>
);

export default Hero;