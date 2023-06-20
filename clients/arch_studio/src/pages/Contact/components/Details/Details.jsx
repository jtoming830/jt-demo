import styled from 'styled-components'
import { Underline } from 'components'
import { ViewOnMap } from './ViewOnMap'

const Container = styled.div`
  margin-top: 200px;
`

const StyledUnderline = styled(Underline)`
  margin-bottom: 74px;

  @media only screen and (max-width: 1200px) {
    margin-bottom: 50px;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 42px;
  }
`

const Contact = styled.div`
  color: var(--dark-grey);
`

const ContactTitle = styled.div`
  font-weight: 700;
  line-height: 35px;
  margin-bottom: 14px;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media only screen and (max-width: 1200px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export function Details() {
  return (
    <Container>
      <StyledUnderline />
      <Content>
        <h2>{'Contact\nDetails'}</h2>
        <Contact>
          <ContactTitle>Main Office</ContactTitle>
          <ContactInfo>
            <div>
              <div>Mail : archone@mail.com</div>
              <div>Address : 1892 Chenoweth Drive TN</div>
              <div>Phone : 123-456-3451</div>
            </div>
            <ViewOnMap />
          </ContactInfo>
        </Contact>
        <Contact>
          <ContactTitle>Office II</ContactTitle>
          <ContactInfo>
            <div>
              <div>Mail : archtwo@mail.com</div>
              <div>Address : 3399 Wines Lane TX</div>
              <div>Phone : 832-123-4321</div>
            </div>
            <ViewOnMap />
          </ContactInfo>
        </Contact>
      </Content>
    </Container>
  )
}
