import { Input } from 'antd'
import { useIntl } from 'react-intl'
import { styled } from 'styled-components'
import { messages } from '../../../../messages'

const Image = styled.img`
  max-width: 100%;
  height: 194px;
  margin: auto;
  margin-bottom: 8px;
  display: block;
`

type ImageInputProps = {
  value?: string
  onChange?: (value: string) => void
}

export function ImageInput({ value, onChange }: ImageInputProps) {
  const intl = useIntl()

  return (
    <div>
      <Image
        loading="lazy"
        src={value}
      />
      <Input
        placeholder={intl.formatMessage(messages.imageInputPlaceholder)}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  )
}
