import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from 'src/store'
import { useQuery } from 'src/utils/hooks/useQuery'
import { useCharactersFetch } from 'src/utils/hooks/useCharactersFetch'
import SearchBar from 'src/components/molecules/search-bar'
import HomeTemplate from 'src/components/templates/home-template'
import CharacterCardList from 'src/components/organisms/character-card-list'
import Loader from 'src/components/atoms/loader'
import Error from 'src/components/atoms/error'

const HomePage = () => {
  const query = useQuery()
  const history = useHistory()
  const search = query.get('search') !== null ? String(query.get('search')) : ''
  const reload = query.get('reload') === null || query.get('reload') === 'true'
  const fetch = useCharactersFetch(search, reload)
  const characters = useSelector((state: RootState) => state.characters)

  const doSearch = (character: string) => {
    history.push(`/?search=${character}`)
  }

  return (
    <>
      <SearchBar doSearch={doSearch} />
      {fetch.status === 'loading' && <Loader />}
      {fetch.status === 'loaded' && (
        <HomeTemplate charactersCardList={<CharacterCardList characters={characters} />} />
      )}
      {fetch.status === 'error' && <Error />}
    </>
  )
}

export default HomePage
