const host = process.env.REACT_APP_DEV_HOST || ''

const baseConfig = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export async function makeRequest<T>(path: string, config: RequestInit) {
  const response = await fetch(host + path, { ...baseConfig, ...config })
  return response.json() as T
}
