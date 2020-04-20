import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'src/store'
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
  const characters = useSelector((state: RootState) => state.characters)
  const queryRef = useRef('')
  const queryNameStartsWith = nameStartsWith === '' ? '' : `nameStartsWith=${nameStartsWith}`

  useEffect(() => {
    if (characters.length === 0 || queryRef.current !== queryNameStartsWith) {
      queryRef.current = queryNameStartsWith
      setResult({ status: 'loading' })
      fetch(`${API_URL}/characters?${queryNameStartsWith}&limit=48&${generateApiKey()}`)
        .then(response => response.json())
        .then(response => {
          dispatch(fetchCharacters(processCharactersApiResult(response.data)))
          setResult({ status: 'loaded' })
        })
        .catch(error => setResult({ status: 'error', error }))
    } else {
      setResult({ status: 'loaded' })
    }
  }, [dispatch, characters, queryNameStartsWith])

  return result
}
