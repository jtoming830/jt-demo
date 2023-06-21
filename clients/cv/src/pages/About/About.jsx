import { styled } from 'styled-components'
import { Section } from '../../components'
import { getExperience } from '../../utils'

const SkillsContainer = styled.div`
  margin-left: -10px;
  margin-top: -6px;
`

const Badge = styled.span`
  border: 1px solid var(--brand-color);
  border-radius: 50px;
  padding: 6px 16px;
  line-height: 20px;
  white-space: nowrap;
  display: inline-block;
  margin: 10px 0 0 10px;
`

const SKILLS = [
  'React',
  'JS',
  'TS',
  'HTML',
  'CSS',
  'Redux',
  'SASS',
  'SCSS',
  'Pixel Perfect Design',
  'Nestjs',
  'SQL',
  'Solution Architect',
  'Team Leading'
]

export default function About() {
  return (
    <>
      <Section title="About Me">
        <p>I am a front-end developer with {getExperience()} years of software development experience.</p>
        <p>
          Proficient in creating responsive and high-quality user interfaces for various business tasks by deploying React
          concepts. Always on the same page with designers and product owners to make best solutions.
        </p>
        <p>Skilled in all stages of advanced web development - both frontend and backend.</p>
      </Section>
      <Section title="Techstack">
        <p>
          For front-end I mainly use React but I also have base knowledge of other modern front-end frameworks such as
          Angular and Vue.
        </p>
        <p>
          Experienced with everything from must-have React stack - Redux (prefer @redux-toolkit), react-router,
          styled-components and different UI kits - Ant Design, Material UI, Bootstrap. Also have a good knowledge of CSS and
          its pre-processors - SASS and SCSS.
        </p>
        <p>Competent in Nest.js with Typeorm and PostgreSQL.</p>
      </Section>
      <Section title="Skills">
        <SkillsContainer>
          {SKILLS.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </SkillsContainer>
      </Section>
    </>
  )
}
