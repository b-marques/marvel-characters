import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { fetchCharacters } from 'src/store/character/actions'
import { Fetch } from 'src/utils/types/fetch'
import { generateApiKey } from 'src/utils/functions/generateApiKey'
import { processCharactersApiResult } from 'src/utils/functions/processApiData'

const API_URL = process.env.REACT_APP_API_URL

export const useCharactersFetch = (search: string, reload: boolean) => {
  const [result, setResult] = useState<Fetch>({
    status: 'init',
  })
  const dispatch = useDispatch()

  useEffect(() => {
    let mounted = true
    if (reload) {
      const queryNameStartsWith = search ? `nameStartsWith=${search}` : ''

      if (mounted) setResult({ status: 'loading' })
      axios
        .get(`${API_URL}/characters?${queryNameStartsWith}&limit=48&${generateApiKey()}`)
        .then((response: any) => {
          if (mounted) {
            dispatch(fetchCharacters(processCharactersApiResult(response.data.data)))
            setResult({ status: 'loaded' })
          }
        })
        .catch((error: any) => {
          if (mounted) setResult({ status: 'error', error })
        })
    } else {
      if (mounted) setResult({ status: 'loaded' })
    }
    return () => {
      mounted = false
    }
  }, [dispatch, search, reload])

  return result
}
