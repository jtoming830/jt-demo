import { styled } from 'styled-components'
import arrow from '../../icons/arrow.svg'
import { useEffect, useState } from 'react'

const Container = styled.div`
  width: 200px;
  height: 58px;
  flex-shrink: 0;
  box-shadow: 0 2px 9px 0 #0000000d;
  padding: 18px 18px 18px 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-color);
  position: relative;
  cursor: pointer;
`

const Icon = styled.span`
  width: 10px;
  height: 6px;
  background: url(${arrow}) no-repeat;
`

const Dropdown = styled.div`
  border-radius: 5px;
  box-shadow: 0 2px 9px 0 #0000000d;
  width: 200px;
  padding: 8px 0;
  background-color: var(--bg-color);
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;

  transition: 0.5s ease;
  opacity: 0;
  visibility: hidden;

  &.visible {
    opacity: 1;
    visibility: visible;
    transform: translate(0px, 60px);
    cursor: pointer;
  }
`

const Item = styled.div`
  font-size: 14px;
  line-height: 20px;

  padding: 8px 24px;

  transition: 0.5s ease;
  &:hover {
    background-color: var(--page-bg-color);
  }
`

const WORLD = 'World'

export function RegionSelect({ regions = [], value, onChange }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    document.body.onclick = () => {
      setVisible(false)
    }
  }, [])

  return (
    <Container
      onClick={(e) => {
        e.stopPropagation()
        setVisible(!visible)
      }}
    >
      <span>{(value !== WORLD && value) || 'Filter by Region'}</span>
      <Icon />
      <Dropdown className={visible ? 'visible' : ''}>
        {[WORLD, ...regions].map((region) => (
          <Item
            key={region}
            onClick={(e) => {
              if (visible) {
                e.stopPropagation()
                setVisible(false)
                onChange(region === WORLD ? null : region)
              }
            }}
          >
            {region}
          </Item>
        ))}
      </Dropdown>
    </Container>
  )
}
