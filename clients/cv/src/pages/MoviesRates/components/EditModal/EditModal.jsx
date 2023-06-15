import { Col, Form, Input, Modal, Row } from 'antd'
import { Footer } from './Footer'
import { ImageInput } from './ImageInput'

export function EditModal({ open, onClose, movie }) {
  return (
    <Modal
      destroyOnClose
      title={movie ? 'Edit Movie' : 'Create Movie'}
      open={open}
      onCancel={onClose}
      footer={null}
    >
      <Form
        layout="vertical"
        initialValues={movie}
      >
        <Row justify="space-between">
          <Col span={11}>
            <Form.Item name="image">
              <ImageInput />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item
              label="Title"
              name="title"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Year"
              name="year"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Score"
              name="score"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="Description"
          name="description"
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Comment"
          name="comment"
        >
          <Input.TextArea />
        </Form.Item>
        <Footer
          movie={movie}
          onClose={onClose}
        />
      </Form>
    </Modal>
  )
}
