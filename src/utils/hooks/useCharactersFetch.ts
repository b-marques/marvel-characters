import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchCharacters } from 'src/store/character/actions'
import { Fetch } from 'src/utils/types/fetch'
import { generateApiKey } from 'src/utils/functions/generateApiKey'
import { processCharactersApiResult } from 'src/utils/functions/processApiData'

const API_URL = process.env.REACT_APP_API_URL

export const useCharactersFetch = (nameStartsWith: string) => {
  const [result, setResult] = useState<Fetch>({
    status: 'init',
  })
  const dispatch = useDispatch()
  const queryNameStartsWith = nameStartsWith === '' ? '' : `nameStartsWith=${nameStartsWith}`

  useEffect(() => {
    setResult({ status: 'loading' })
    fetch(`${API_URL}/characters?${queryNameStartsWith}&limit=48&${generateApiKey()}`)
      .then(response => response.json())
      .then(response => {
        dispatch(fetchCharacters(processCharactersApiResult(response.data)))
        setResult({ status: 'loaded' })
      })
      .catch(error => setResult({ status: 'error', error }))
  }, [dispatch, queryNameStartsWith])

  return result
}
