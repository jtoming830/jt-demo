import { styled } from 'styled-components'
import { List, Section, Title } from '../../components'
import work from '../../icons/work.svg'

const ListItem = styled.li`
  &:first-child {
    padding-bottom: 30px;

    &:before {
      height: 32px;
      width: 32px;
      background: var(--brand-color);
      margin-left: -37px;
      margin-top: -10px;
      border: none;
    }

    &:after {
      content: '';
      background: url(${work}) no-repeat;
      background-size: 20px 20px;
      width: 20px;
      height: 20px;
      display: block;
      margin-left: -30px;
      margin-top: -15px;
      position: absolute;
    }
  }

  p {
    line-height: 16px;
  }
`

const ListItemContent = styled.div`
  margin-left: 10px;
`

const JobTitle = styled.div`
  line-height: 16px;
  font-size: 16px;
  font-weight: 600;
`

const Time = styled.div`
  padding-top: 6px;
  line-height: 16px;
  font-size: 13px;
`

export default function Resume() {
  return (
    <Section>
      <List>
        <ListItem>
          <Title style={{ marginLeft: 10 }}>Working History</Title>
        </ListItem>
        <ListItem>
          <ListItemContent>
            <JobTitle>Fullstack Developer - NVP Software LLC</JobTitle>
            <Time>Apr 2021 - Present</Time>
            <p>- Fullstack outsource development of different projects for Apple and Formelife</p>
            <p>- Both frontend and backend for highly-customizable CRM with third-party application integrations</p>
            <p>- Frontend for user life activity tracking tool</p>
            <p>
              - Close interaction with product owners and designers to find the best solutions to accomplish business
              requests{' '}
            </p>
            <p>- Successfully mentored 2 new teammates </p>
            <p>- Maintain libraries of shared components including form builder/renderer engine</p>
            <p>- Created component library from scratch </p>
            <p>- Designed API for shared components </p>
            <p>
              - Created architecture for form builder/renderer engine (similiar to Form.io) used by different teams in 4
              projects
            </p>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent>
            <JobTitle>Frontend Developer - Developer Express, Inc.</JobTitle>
            <Time>Apr 2019 - Apr 2021</Time>
            <p>- Support library of Javascript cross-framework components</p>
            <p>
              - Created different features (d'n'd, editing and sorting enhancements) for components (DataGrid, PivotGrid,
              TreeList)
            </p>
            <p>- Made API of the components more React-like to make it usement in React more comfortable</p>
            <p>- Feature full delivery cycle - from user request analysis to implementation and release support</p>
            <p>- Activity in bug fixing - about 30% of team bug fixes</p>
            <p>- Activity in process optimisation - created various internal tools to improve development processes</p>
            <p>- Accessibility testing (WCAG 2.1, Section 508, EN 301 549)</p>
            <p>- Write demos</p>
            <p>- Communicate with customers in the support center and GitHub</p>
            <p>- Successfully mentored new teammate</p>
            <p>- Wrote a complete guide to internal systems to make onboarding processes easier</p>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent>
            <JobTitle>QA Automation Engineer - Gaijin Entertainment</JobTitle>
            <Time>May 2018 - Apr 2019</Time>
            <p>- Build custom server test runner with Grafana integration</p>
            <p>- Write tests for both backend (node.js + mocha) and frontend (selenium)</p>
            <p>- Analyze PHP/Golang codebase of the SSO server</p>
            <p>- Write documentation</p>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent>
            <JobTitle>Business Analyst Intern - Dnevnik.ru</JobTitle>
            <Time>Mar 2018 - May 2018 </Time>
            <p>
              - Wrote documentation for school service which makes communication between teachers and students' parents
              easier
            </p>
            <p>- Compared existing documentation with actual behavior</p>
            <p>- Created BRDs for system</p>
            <p>- Сhecked SQL queries for BRD compliance</p>
          </ListItemContent>
        </ListItem>
      </List>
    </Section>
  )
}
