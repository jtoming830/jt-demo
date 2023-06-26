import { styled } from 'styled-components'
import { About } from '../About'
import { Resume } from '../Resume'
import img from '../../images/photo.jpg'
import { Section } from '../../components'

const BgContainer = styled.div`
  background: var(--bg-color);
  width: 100vw;
  padding: 0 40px 40px;
  box-sizing: border-box;
`

const Header = styled.div`
  margin: auto;
  margin-bottom: 80px;
`

const HeaderContent = styled.div`
  color: var(--primary-text-color);

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: auto;
  width: 842px;
`

const Image = styled.div`
  height: 200px;
  width: 200px;
  background: url(${img}) no-repeat;
  background-size: cover;
  background-position-y: -10px;
`

const Container = styled.div`
  margin: auto;

  width: 842px;

  z-index: 0;
  position: relative;

  ul {
    padding-left: 0;

    > li {
      padding-left: 0;
      border-left: none;

      > div {
        margin-left: 0;
      }

      &::before,
      &:first-child::after {
        display: none;
      }
    }
  }
`

const FlexContainer = styled.div`
  display: flex;
`

const LeftColumn = styled.div`
  width: 200px;
  border-right: 1px solid var(--brand-light-color);
  margin-right: 20px;
  padding-right: 20px;
  box-sizing: border-box;
`

const Skill = styled.div`
  font-weight: 700;

  & + & {
    margin-top: 8px;
  }
`

const StyledResume = styled(Resume)`
  p {
    line-height: 15px;
    font-size: 15px;
    margin: 14px 0;
  }
`

const Link = styled.a`
  display: block;

  & + & {
    margin-top: 10px;
  }
`

const socials = [
  {
    link: 'https://jtoming.t.me/',
    title: 'Telegram'
  },
  {
    link: 'https://wa.me/37258139096',
    title: 'WhatsApp'
  },
  {
    link: 'https://github.com/jtoming830/jt-demo',
    title: 'GitHub'
  },
  {
    link: 'https://www.linkedin.com/in/jtoming',
    title: 'LinkedIn'
  }
]

const SKILLS = [
  'React',
  'JS',
  'TS',
  'HTML',
  'CSS',
  'Redux',
  'SASS',
  'SCSS',
  'Nestjs',
  'SQL',
  'Pixel Perfect Design',
  'Solution Architect',
  'Team Leading'
]

export function CV() {
  return (
    <BgContainer>
      <Header>
        <HeaderContent>
          <div>
            <h1>Jaan Toming</h1>
            <h2>Frontend Developer</h2>
          </div>
          <Image />
        </HeaderContent>
      </Header>
      <Container>
        <FlexContainer>
          <LeftColumn>
            <Section title="Contacts">
              <Link href="mailto:jtoming@gmail.com">jtoming@gmail.com</Link>
              <Link href="tel:+372 5813 9096">+372 5813 9096</Link>
            </Section>
            <Section title="Socials">
              {socials.map(({ title, link }) => (
                <Link
                  key={title}
                  href={link}
                >
                  {title}
                </Link>
              ))}
            </Section>
            <Section title="Skills">
              {SKILLS.map((text) => (
                <Skill key={text}>{text}</Skill>
              ))}
            </Section>
          </LeftColumn>
          <div>
            <About hideSkills />
            <Section title="Portfolio">
              <p>
                My GitHub: <a href="https://github.com/jtoming830/jt-demo">https://github.com/jtoming830/jt-demo</a>
              </p>
              <p>
                My Portfolio: <a href="http://jtoming.me/cv/portfolio">http://jtoming.me</a>
              </p>
            </Section>
            <Section title="Education">
              <h4>Saint Petersburg State Electrotechnical University "LETI"</h4>
              <p>Bachelor's degree, Informatics and Computer Engineering, Sep 2015 - Jul 2019</p>
            </Section>
          </div>
        </FlexContainer>

        <div style={{ marginTop: 200, paddingTop: 40 }}>
          <StyledResume />
        </div>
      </Container>
    </BgContainer>
  )
}
