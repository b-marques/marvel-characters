type FetchLoading = {
  status: 'loading'
}

type FetchLoaded = {
  status: 'loaded'
}

type FetchError = {
  status: 'error'
  error: Error
}

export type Fetch = FetchLoading | FetchLoaded | FetchError
