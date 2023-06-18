import { styled } from 'styled-components'
import linkedinImg from '../../images/linkedin.png'
import githubImg from '../../images/github.png'
import tgImg from '../../images/telegram.png'
import whatsappImg from '../../images/whatsapp.png'

const Container = styled.div`
  margin: auto 10px auto 0;
  display: flex;
`

const SocialLink = styled.a`
  display: block;
  transition: transform 0.3s ease;
  height: ${(props) => props.$height + 'px'};

  &:hover {
    transform: scale(1.2);
  }

  & + & {
    margin-left: 10px;
  }
`

const socials = [
  {
    link: 'https://jtoming.t.me/',
    img: tgImg
  },
  {
    link: 'https://wa.me/37258139096',
    img: whatsappImg
  },
  {
    link: 'https://github.com/jtoming830/jt-demo',
    img: githubImg
  },
  {
    link: 'https://www.linkedin.com/in/jtoming',
    img: linkedinImg
  }
]

export function Socials({ height = 20 }) {
  return (
    <Container>
      {socials.map(({ link, img }) => (
        <SocialLink
          $height={height}
          target="_blank"
          href={link}
          key={link}
        >
          <img
            height={height}
            src={img}
          />
        </SocialLink>
      ))}
    </Container>
  )
}
