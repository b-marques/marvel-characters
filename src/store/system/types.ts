export type SystemState = {
  page: number
  limit: number
}

/* System Actions Constants */
export const UPDATE_PAGE = 'UPDATE_PAGE'

/* System Actions Shapes */
type UpdatePageAction = {
  type: typeof UPDATE_PAGE
  payload: number
}

export type SystemActionTypes = UpdatePageAction
