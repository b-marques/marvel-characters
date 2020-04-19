import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchCharacters } from 'src/store/character/actions'
import { Fetch } from 'src/utils/types/fetch'
import { generateApiKey } from 'src/utils/functions/generateApiKey'
import { processCharactersApiResult } from 'src/utils/functions/processApiData'

const API_URL = process.env.REACT_APP_API_URL

export const useCharactersFetch = () => {
  const dispatch = useDispatch()
  const [result, setResult] = useState<Fetch>({
    status: 'loading',
  })

  useEffect(() => {
    fetch(`${API_URL}/characters?limit=48&${generateApiKey()}`)
      .then(response => response.json())
      .then(response => {
        dispatch(fetchCharacters(processCharactersApiResult(response.data)))
        setResult({ status: 'loaded' })
      })
      .catch(error => setResult({ status: 'error', error }))
  }, [dispatch])

  return result
}
