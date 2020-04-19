import md5 from 'md5'

export const generateApiKey = () => {
  if (process.env.REACT_APP_API_KEY_PUBLIC && process.env.REACT_APP_API_KEY_PRIVATE) {
    let ts = Date.now()
    return `ts=${ts}&apikey=${process.env.REACT_APP_API_KEY_PUBLIC}&hash=${md5(
      ts + process.env.REACT_APP_API_KEY_PRIVATE + process.env.REACT_APP_API_KEY_PUBLIC,
    )}`
  }
}
