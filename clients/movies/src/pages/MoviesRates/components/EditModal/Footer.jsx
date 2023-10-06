import { Button, Form } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { styled } from 'styled-components'
import { createMovie, removeMovie, updateMovie } from '../../../../store/movies'
import { useIntl } from 'react-intl'
import { messages } from '../../../../messages'

const Container = styled.div`
  button + button {
    margin-left: 8px;
  }

  display: flex;
  justify-content: space-between;
`

export function Footer({ movie, onClose }) {
  const dispatch = useDispatch()
  const intl = useIntl()

  const [loading, setLoading] = useState()
  const [deleteLoading, setDeleteLoading] = useState()

  const form = Form.useFormInstance()

  return (
    <Container>
      <div>
        {movie && (
          <Button
            danger
            type="primary"
            loading={deleteLoading}
            disabled={loading}
            onClick={async () => {
              setDeleteLoading(true)
              await dispatch(removeMovie(movie.id))
              setDeleteLoading(false)
              onClose()
            }}
          >
            {intl.formatMessage(messages.delete)}
          </Button>
        )}
      </div>
      <div>
        <Button
          onClick={onClose}
          disabled={loading || deleteLoading}
        >
          {intl.formatMessage(messages.cancel)}
        </Button>
        <Button
          loading={loading}
          disabled={deleteLoading}
          type="primary"
          onClick={async () => {
            const data = form.getFieldsValue()

            setLoading(true)
            await dispatch(movie ? updateMovie({ id: movie.id, ...data }) : createMovie(data))
            setLoading(false)
            onClose()
          }}
        >
          {intl.formatMessage(messages.save)}
        </Button>
      </div>
    </Container>
  )
}
