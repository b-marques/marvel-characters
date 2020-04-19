import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchCharacterSeries } from 'src/store/character/actions'
import { Fetch } from 'src/utils/types/fetch'
import { generateApiKey } from 'src/utils/functions/generateApiKey'
import { processSeriesApiResult } from 'src/utils/functions/processApiData'
import { Character } from 'src/store/character/types'

const API_URL = process.env.REACT_APP_API_URL

export const useSeriesFetch = (character: Character | undefined) => {
  const dispatch = useDispatch()
  const [result, setResult] = useState<Fetch>({
    status: 'init',
  })

  useEffect(() => {
    let mounted = true
    if (character) {
      setResult({ status: 'loading' })
      fetch(`${API_URL}/characters/${character.id}/series?limit=20&${generateApiKey()}`)
        .then(response => response.json())
        .then(response => {
          if (mounted) {
            dispatch(fetchCharacterSeries(character.id, processSeriesApiResult(response.data)))
            setResult({ status: 'loaded' })
          }
        })
        .catch(error => setResult({ status: 'error', error }))
    }
    return () => {
      mounted = false
    }
  }, [character, dispatch])

  return result
}
