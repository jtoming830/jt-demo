import { Button, Form } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { styled } from 'styled-components'
import { createMovie, removeMovie, updateMovie } from '../../../../store/movies'

const Container = styled.div`
  button + button {
    margin-left: 8px;
  }

  display: flex;
  justify-content: space-between;
`

export function Footer({ movie, onClose }) {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState()
  const [deleteLoading, setDeleteLoading] = useState()

  const form = Form.useFormInstance()

  return (
    <Container>
      <div>
        {movie && (
          <Button
            danger
            loading={deleteLoading}
            disabled={loading}
            onClick={async () => {
              setDeleteLoading(true)
              await dispatch(removeMovie(movie.id))
              setDeleteLoading(false)
              onClose()
            }}
          >
            Delete
          </Button>
        )}
      </div>
      <div>
        <Button
          onClick={onClose}
          disabled={loading || deleteLoading}
        >
          Cancel
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
          Save
        </Button>
      </div>
    </Container>
  )
}
