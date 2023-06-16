import { styled } from 'styled-components'
import svg from './bg-tablet-pattern.svg'

export const Background = styled.div`
  background: url(${svg}) no-repeat;
  background-size: cover;

  width: 1200px;
  height: 1200px;

  position: absolute;
  z-index: -1;

  right: -200px;
  top: -250px;
`
