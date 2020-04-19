import { useEffect, useState } from 'react'
import { Fetch } from 'src/utils/types/fetch'
import { Character } from 'src/utils/types/character'
import { generateApiKey } from 'src/utils/functions/generateApiKey'
import { processCharactersApiResult } from 'src/utils/functions/processApiData'

const API_URL = process.env.REACT_APP_API_URL

export const useCharactersFetch = () => {
  const [result, setResult] = useState<Fetch<Character[]>>({
    status: 'loading',
  })

  useEffect(() => {
    fetch(`${API_URL}/characters?limit=48&${generateApiKey()}`)
      .then(response => response.json())
      .then(response =>
        setResult({ status: 'loaded', payload: processCharactersApiResult(response.data) }),
      )
      .catch(error => setResult({ status: 'error', error }))
  }, [])

  return result
}
