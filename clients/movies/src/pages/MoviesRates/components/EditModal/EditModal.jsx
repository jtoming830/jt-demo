import { Checkbox, Col, Form, Input, InputNumber, Modal, Row } from 'antd'
import { Footer } from './Footer'
import { ImageInput } from './ImageInput'
import { useEffect } from 'react'
import { useIntl } from 'react-intl'
import { messages } from '../../../../messages'

export function EditModal({ open, onClose, movie }) {
  const [form] = Form.useForm()
  const intl = useIntl()

  useEffect(() => {
    open ? form.setFieldsValue(movie || { watched: true }) : form.resetFields()
  }, [movie, open, form])

  return (
    <Modal
      width={800}
      title={movie ? intl.formatMessage(messages.editMovie) : intl.formatMessage(messages.createMovie)}
      open={open}
      onCancel={onClose}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
      >
        <Row justify="space-between">
          <Col span={11}>
            <Form.Item name="image">
              <ImageInput />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item
              label={intl.formatMessage(messages.titleField)}
              name="title"
            >
              <Input />
            </Form.Item>
            <Row>
              <Col>
                <Form.Item
                  label={intl.formatMessage(messages.yearField)}
                  name="year"
                >
                  <InputNumber />
                </Form.Item>
              </Col>
              <Col offset={4}>
                <Form.Item
                  label={intl.formatMessage(messages.scoreField)}
                  name="score"
                >
                  <InputNumber
                    min={0}
                    max={10}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              valuePropName="checked"
              name="watched"
            >
              <Checkbox>{intl.formatMessage(messages.watchedField)}</Checkbox>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label={intl.formatMessage(messages.descriptionField)}
          name="description"
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label={intl.formatMessage(messages.commentField)}
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
