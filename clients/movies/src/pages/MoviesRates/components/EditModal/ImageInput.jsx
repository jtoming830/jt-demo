import { Input } from 'antd'
import { styled } from 'styled-components'

const Image = styled.img`
  max-width: 100%;
  height: 194px;
  margin: auto;
  margin-bottom: 8px;
  display: block;
`

export function ImageInput({ value, onChange }) {
  return (
    <div>
      <Image src={value} />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
