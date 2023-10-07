import { Checkbox, Col, Form, Input, InputNumber, Modal, Row, Select } from 'antd'
import { Footer } from './Footer'
import { ImageInput } from './ImageInput'
import { useEffect } from 'react'
import { useIntl } from 'react-intl'
import { messages } from '../../../../messages'

const getGenreOptions = (intl) =>
  [
    'comedy',
    'horror',
    'fantasy',
    'drama',
    'action',
    'sci-fi',
    'crime',
    'biography',
    'history',
    'adventure',
    'thriller',
    'mystery'
  ].map((value) => ({ value, label: intl.messages[value] }))

export function EditModal({ open, onClose, movie }) {
  const [form] = Form.useForm()
  const intl = useIntl()

  useEffect(() => {
    open ? form.setFieldsValue({ ...movie, genre: movie?.genre || [] } || { watched: true }) : form.resetFields()
  }, [movie, open, form])

  const genreOptions = getGenreOptions(intl)

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
            <Form.Item
              label={intl.formatMessage(messages.genreField)}
              name="genre"
            >
              <Select
                mode="multiple"
                maxTagCount="responsive"
                options={genreOptions}
              />
            </Form.Item>
            <Row>
              <Col>
                <Form.Item
                  label={intl.formatMessage(messages.yearField)}
                  name="year"
                  min={1900}
                  max={2030}
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
          </Col>
        </Row>
        <Form.Item
          valuePropName="checked"
          name="watched"
        >
          <Checkbox>{intl.formatMessage(messages.watchedField)}</Checkbox>
        </Form.Item>
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
