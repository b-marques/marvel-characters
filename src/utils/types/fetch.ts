type FetchInit = {
  status: 'init'
}

type FetchLoading = {
  status: 'loading'
}

type FetchLoaded<T> = {
  status: 'loaded'
  payload: T
}

type FetchError = {
  status: 'error'
  error: Error
}

export type Fetch<T> = FetchInit | FetchLoading | FetchLoaded<T> | FetchError
