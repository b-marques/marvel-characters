import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchCharacterSeries } from 'src/store/character/actions'
import { Fetch } from 'src/utils/types/fetch'
import { generateApiKey } from 'src/utils/functions/generateApiKey'
import { processSeriesApiResult } from 'src/utils/functions/processApiData'

const API_URL = process.env.REACT_APP_API_URL

export const useSeriesFetch = (state: any) => {
  const characterId = state.character.id
  const dispatch = useDispatch()
  const [result, setResult] = useState<Fetch>({
    status: 'loading',
  })

  useEffect(() => {
    let mounted = true
    if (state) {
      fetch(`${API_URL}/characters/${characterId}/series?limit=20&${generateApiKey()}`)
        .then(response => response.json())
        .then(response => {
          if (mounted) {
            dispatch(fetchCharacterSeries(characterId, processSeriesApiResult(response.data)))
            setResult({ status: 'loaded' })
          }
        })
        .catch(error => setResult({ status: 'error', error }))
    }
    return () => {
      mounted = false
    }
  }, [state, characterId, dispatch])

  return result
}
