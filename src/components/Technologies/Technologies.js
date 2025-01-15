import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I’ve worked with a wide range of technologies across multiple domains, including:
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Web Development</ListTitle>
          <ListParagraph>
            • HTML5 <br />
            • CSS3 <br />
            • Node.js <br />
            • React.js <br />
            • Next.js <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>System Administration</ListTitle>
          <ListParagraph>
            • Microsoft Windows <br />
            • MacOS <br />
            • Linux <br />
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Networking & Cybersecurity</ListTitle>
          <ListParagraph>
            • Cisco Network Security <br />
            • Firewalls <br />
            • Risk Management <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
