const host = process.env.REACT_APP_DEV_HOST || ''

export const makeRequest = (path, config) => fetch(host + path, config)
