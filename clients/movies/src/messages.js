// this file contains all definitions for intl messages
import { defineMessages } from 'react-intl'

const genres = defineMessages({
  comedy: {
    id: 'comedy',
    defaultMessage: 'Comedy'
  },
  horror: {
    id: 'horror',
    defaultMessage: 'Horror'
  },
  fantasy: {
    id: 'fantasy',
    defaultMessage: 'Fantasy'
  },
  drama: {
    id: 'drama',
    defaultMessage: 'Drama'
  },
  action: {
    id: 'action',
    defaultMessage: 'Action'
  },
  ['sci-fi']: {
    id: 'sci-fi',
    defaultMessage: 'Sci-Fi'
  },
  crime: {
    id: 'crime',
    defaultMessage: 'Crime'
  },
  biography: {
    id: 'biography',
    defaultMessage: 'Biography'
  },
  history: {
    id: 'history',
    defaultMessage: 'History'
  },
  adventure: {
    id: 'adventure',
    defaultMessage: 'Adventure'
  },
  thriller: {
    id: 'thriller',
    defaultMessage: 'Thriller'
  },
  mystery: {
    id: 'mystery',
    defaultMessage: 'Mystery'
  }
})

const common = defineMessages({
  title: {
    id: 'title',
    defaultMessage: 'Movies',
    description: 'Title in the header'
  },
  searchPlaceholder: {
    id: 'searchPlaceholder',
    defaultMessage: 'Search',
    description: 'Search placeholder text'
  },
  imageInputPlaceholder: {
    id: 'imageInputPlaceholder',
    defaultMessage: 'Image link',
    description: 'Image link placeholder text'
  },
  add: {
    id: 'add',
    defaultMessage: 'Add',
    description: 'Add button text'
  },
  delete: {
    id: 'delete',
    defaultMessage: 'Delete',
    description: 'Delete button text'
  },
  save: {
    id: 'save',
    defaultMessage: 'Save',
    description: 'Save button text'
  },
  cancel: {
    id: 'cancel',
    defaultMessage: 'Cancel',
    description: 'Cancel button text'
  },
  yes: {
    id: 'yes',
    defaultMessage: 'Yes'
  },
  no: {
    id: 'no',
    defaultMessage: 'No'
  },
  titleField: {
    id: 'titleField',
    defaultMessage: 'Title',
    description: 'Title field text'
  },
  genreField: {
    id: 'genreField',
    defaultMessage: 'Genre',
    description: 'Genre field text'
  },
  scoreField: {
    id: 'scoreField',
    defaultMessage: 'Score',
    description: 'Score field text'
  },
  yearField: {
    id: 'yearField',
    defaultMessage: 'Year',
    description: 'Year field text'
  },
  descriptionField: {
    id: 'descriptionField',
    defaultMessage: 'Description',
    description: 'Description field text'
  },
  commentField: {
    id: 'commentField',
    defaultMessage: 'Comment',
    description: 'Comment field text'
  },
  watchedField: {
    id: 'watchedField',
    defaultMessage: 'Watched',
    description: 'Watched field text'
  },
  linksField: {
    id: 'linksField',
    defaultMessage: 'Links',
    description: 'Links field text'
  },
  editMovie: {
    id: 'editMovie',
    defaultMessage: 'Edit Movie',
    description: 'Edit Movie modal title'
  },
  createMovie: {
    id: 'createMovie',
    defaultMessage: 'Create Movie',
    description: 'Create Movie modal title'
  }
})

export const messages = {
  ...common,
  genres
}
