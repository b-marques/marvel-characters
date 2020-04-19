import { useEffect, useState } from 'react'
import { Fetch } from 'src/utils/types/fetch'
import { Series } from 'src/store/series/types'
import { generateApiKey } from 'src/utils/functions/generateApiKey'
import { processSeriesApiResult } from 'src/utils/functions/processApiData'

const API_URL = process.env.REACT_APP_API_URL

export const useSeriesFetch = (state: any) => {
  const [result, setResult] = useState<Fetch<Series[]>>({
    status: 'loading',
  })

  useEffect(() => {
    let mounted = true
    if (state) {
      fetch(`${API_URL}/characters/${state.character.id}/series?limit=20&${generateApiKey()}`)
        .then(response => response.json())
        .then(response => {
          if (mounted)
            setResult({ status: 'loaded', payload: processSeriesApiResult(response.data) })
        })
        .catch(error => setResult({ status: 'error', error }))
    }
    return () => {
      mounted = false
    }
  }, [state])

  return result
}
