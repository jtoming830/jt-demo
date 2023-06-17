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
  height: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  & + & {
    margin-left: 10px;
  }

  transition: visibility 0.5s, opacity 0.5s linear;
  @media only screen and (min-width: 500px) and (max-width: 1200px) {
    visibility: hidden;
    opacity: 0;
  }

  @media only screen and (min-width: 500px) and (max-width: 1080px) {
    display: none;
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

export function Socials() {
  return (
    <Container>
      {socials.map(({ link, img }) => (
        <SocialLink
          target="_blank"
          href={link}
          key={link}
        >
          <img
            height={20}
            src={img}
          />
        </SocialLink>
      ))}
    </Container>
  )
}
