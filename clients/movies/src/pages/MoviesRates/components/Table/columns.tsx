import styled from 'styled-components'
import { messages } from '../../../../messages'
import { IntlShape } from 'react-intl'
import { ColumnsType } from 'antd/es/table'
import { Movie } from '../../../../types/movie'

const Image = styled.img`
  display: block;
  height: 100px;
  max-width: 100%;
  margin: auto;
`

const nullChecker = (a: unknown, b: unknown) => {
  if (!a) {
    return -1
  }
  if (!b) {
    return 1
  }

  return 0
}

export const getColumns = (intl: IntlShape): ColumnsType<Movie> => [
  {
    title: '',
    dataIndex: 'image',
    key: 'image',
    width: 150,
    render: (text: string) => <Image src={text} />
  },
  {
    title: intl.formatMessage(messages.titleField),
    dataIndex: 'title',
    key: 'title',
    sorter: (a, b) => nullChecker(a.title, b.title) || a.title!.localeCompare(b.title!)
  },
  {
    title: intl.formatMessage(messages.scoreField),
    dataIndex: 'score',
    key: 'score',
    width: 140,
    sorter: (a, b) => nullChecker(a.score, b.score) || a.score! - b.score!
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
