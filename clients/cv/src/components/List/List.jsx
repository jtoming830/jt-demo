import { styled } from 'styled-components'

export const List = styled.ul`
  list-style: none;

  li {
    padding: 0 0 20px 20px;
    line-height: 12px;
    border-left: 2px solid var(--secondary-text-color);

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 2px solid var(--brand-color);
      margin-top: 1px;
      margin-left: -27px;
      background: white;
    }

    &:last-child {
      margin-top: -3px;
      border: 2px solid transparent;
    }
  }
`
