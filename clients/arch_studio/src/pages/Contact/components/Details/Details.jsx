import styled from 'styled-components'
import { Underline } from 'components'
import { ViewOnMap } from './ViewOnMap'

const Container = styled.div`
  margin-top: 200px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

const Contact = styled.div`
  color: var(--dark-grey);
`

const ContactTitle = styled.div`
  font-weight: 700;
  line-height: 35px;
  margin-bottom: 14px;
`

export function Details() {
  return (
    <Container>
      <Underline marginBottom={74} />
      <Content>
        <h2>{'Contact\nDetails'}</h2>
        <Contact>
          <ContactTitle>Main Office</ContactTitle>
          <div>Mail : archone@mail.com</div>
          <div>Address : 1892 Chenoweth Drive TN</div>
          <div>Phone : 123-456-3451</div>
          <ViewOnMap />
        </Contact>
        <Contact>
          <ContactTitle>Office II</ContactTitle>
          <div>Mail : archtwo@mail.com</div>
          <div>Address : 3399 Wines Lane TX</div>
          <div>Phone : 832-123-4321</div>
          <ViewOnMap />
        </Contact>
      </Content>
    </Container>
  )
}
