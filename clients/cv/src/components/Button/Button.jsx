import styled from 'styled-components'

export const Button = styled.div`
  background-color: var(--brand-color);
  border-radius: 50px;
  padding: 0 16px;
  font-size: 14px;
  line-height: 35px;
  height: 35px;
  margin: auto;
  display: flex;
  color: var(--primary-text-color);
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: var(--brand-dark-color);
  }
`
