import { styled } from 'styled-components'
import { Section, Socials } from '../../components'

const IFrame = styled.iframe`
  border: 0;
  width: 100%;
  height: 400px;
`

const Item = styled.div`
  font-size: 14px;
`

const Title = styled.span``

const Text = styled.span`
  color: var(--secondary-text-color);
`

export default function Contacts() {
  return (
    <>
      <Section title="Contact Information">
        <Item>
          <Title>Address:</Title>
          <Text> 11314, Parnu mnt 125, Tallinn, Estonia</Text>
        </Item>
        <Item>
          <Title>Phone:</Title>
          <Text> +372 5813 9096</Text>
        </Item>
        <Item>
          <Title>Email:</Title>
          <a href="mailto:jtoming@gmail.com"> jtoming@gmail.com</a>
        </Item>
      </Section>
      <Section title="Socials">
        <Socials height={30} />
      </Section>
      <Section title="Contact Map">
        <IFrame src="https://www.google.com/maps/embed/v1/place?q=Estonia+Tallinn+Parnu+mnt+125&key=AIzaSyBBfK_vdplkKyzwU31s13MlGNA2p75GrWY" />
      </Section>
    </>
  )
}
