export const MODES = {
  MONTLY: 'Monthly',
  YEARLY: 'Yearly'
}

export const FEATURES = {
  UNLIMITED_STORY_POSTING: 'UNLIMITED STORY POSTING',
  UNLIMITED_PHOTO_UPLOAD: 'UNLIMITED PHOTO UPLOAD',
  EMBEDDING_CUSTOM_CONTENT: 'EMBEDDING CUSTOM CONTENT',
  CUSTOMIZE_METADATA: 'CUSTOMIZE METADATA',
  ADVANCED_METRICS: 'ADVANCED METRICS',
  PHOTO_DOWNLOADS: 'PHOTO DOWNLOADS',
  SEARCH_ENGINE_INDEXING: 'SEARCH ENGINE INDEXING',
  CUSTOM_ANALYTICS: 'CUSTOM ANALYTICS'
}

export const plans = [
  {
    name: 'Basic',
    text: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
    basePrice: '19.00',
    yearlyPrice: '190.00',
    features: [FEATURES.UNLIMITED_STORY_POSTING, FEATURES.UNLIMITED_PHOTO_UPLOAD]
  },
  {
    name: 'Pro',
    text: 'More advanced features available. Recommended for photography veterans and professionals.',
    basePrice: '39.00',
    yearlyPrice: '390.00',
    features: [
      FEATURES.UNLIMITED_STORY_POSTING,
      FEATURES.UNLIMITED_PHOTO_UPLOAD,
      FEATURES.EMBEDDING_CUSTOM_CONTENT,
      FEATURES.CUSTOMIZE_METADATA
    ],
    featured: true
  },
  {
    name: 'Business',
    text: 'Additional features available such as more detailed metrics. Recommended for business owners.',
    basePrice: '99.00',
    yearlyPrice: '990.00',
    features: [
      FEATURES.UNLIMITED_STORY_POSTING,
      FEATURES.UNLIMITED_PHOTO_UPLOAD,
      FEATURES.EMBEDDING_CUSTOM_CONTENT,
      FEATURES.CUSTOMIZE_METADATA,
      FEATURES.ADVANCED_METRICS,
      FEATURES.PHOTO_DOWNLOADS,
      FEATURES.SEARCH_ENGINE_INDEXING,
      FEATURES.CUSTOM_ANALYTICS
    ]
  }
]
