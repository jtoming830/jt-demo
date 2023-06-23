import { styled } from 'styled-components'

const Container = styled.div`
  &.horizontal {
    height: 6px;
  }

  &.vertical {
    width: 6px;
  }

  background: linear-gradient(27deg, #ffc593 0%, #bc7198 52%, #5a77ff 100%);
`

export function Accent({ vertical, size, className }) {
  const mergedClassName = [className, vertical ? 'vertical' : 'horizontal'].filter(Boolean).join(' ')

  return (
    <Container
      className={mergedClassName}
      $size={size}
    />
  )
}
