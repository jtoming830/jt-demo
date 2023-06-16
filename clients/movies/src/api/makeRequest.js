const host = process.env.REACT_APP_DEV_HOST || ''

const baseConfig = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export const makeRequest = (path, config) =>
  fetch(host + path, { ...baseConfig, ...config }).then((response) => response.json())
