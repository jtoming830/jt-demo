import { styled } from 'styled-components'
import { Section } from '../../components'

const IFrame = styled.iframe`
  border: 0;
  width: 100%;
  height: 400px;
`

export default function Contacts() {
  return (
    <>
      <Section title="Contact Information">
        <div>TODO</div>
      </Section>

      <Section title="Contact Map">
        <IFrame src="https://www.google.com/maps/embed/v1/place?q=Estonia+Tallinn+Parnu+mnt+125&key=AIzaSyBBfK_vdplkKyzwU31s13MlGNA2p75GrWY" />
      </Section>
    </>
  )
}
