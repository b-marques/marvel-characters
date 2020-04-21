import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

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
    if (character && character.series.length === 0) {
      if (mounted) setResult({ status: 'loading' })
      axios
        .get(`${API_URL}characters/${character.id}/series?limit=20&${generateApiKey()}`)
        .then(response => {
          if (mounted) {
            dispatch(fetchCharacterSeries(character.id, processSeriesApiResult(response.data.data)))
            setResult({ status: 'loaded' })
          }
        })
        .catch(error => {
          if (mounted) setResult({ status: 'error', error })
        })
    } else {
      if (mounted) setResult({ status: 'loaded' })
    }
    return () => {
      mounted = false
    }
  }, [character, dispatch])

  return result
}
