import styled from 'styled-components'
import { messages } from '../../../../messages'

const Image = styled.img`
  display: block;
  height: 100px;
  max-width: 100%;
  margin: auto;
`

export const getColumns = (intl) => [
  {
    title: '',
    dataIndex: 'image',
    key: 'image',
    width: 150,
    render: (text) => <Image src={text} />
  },
  {
    title: intl.formatMessage(messages.titleField),
    dataIndex: 'title',
    key: 'title',
    sorter: (a, b) => a.title.localeCompare(b.title)
  },
  {
    title: intl.formatMessage(messages.scoreField),
    dataIndex: 'score',
    key: 'score',
    width: 140,
    sorter: (a, b) => a.score - b.score
  },
  {
    title: intl.formatMessage(messages.descriptionField),
    dataIndex: 'description',
    key: 'description'
  },
  {
    title: intl.formatMessage(messages.commentField),
    dataIndex: 'comment',
    key: 'comment'
  },
  {
    title: intl.formatMessage(messages.watchedField),
    width: 180,
    dataIndex: 'watched',
    key: 'watched',
    render: (value) => (value ? intl.formatMessage(messages.yes) : intl.formatMessage(messages.no)),
    filters: [
      {
        text: intl.formatMessage(messages.yes),
        value: true
      },
      {
        text: intl.formatMessage(messages.no),
        value: false
      }
    ],
    onFilter: (value, record) => !!record.watched === value
  }
]
