import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'src/store'
import { useCharactersFetch } from 'src/utils/hooks/useCharactersFetch'
import SearchBar from 'src/components/molecules/search-bar'
import HomeTemplate from 'src/components/templates/home-template'
import CharacterCardList from 'src/components/organisms/character-card-list'
import Loader from 'src/components/atoms/loader'
import Error from 'src/components/atoms/error'

const search = (character: string) => {
  console.log(character)
}

const HomePage = () => {
  const fetch = useCharactersFetch()
  const characters = useSelector((state: RootState) => state.characters)

  return (
    <>
      <SearchBar search={search} />
      {fetch.status === 'loading' && <Loader />}
      {fetch.status === 'loaded' && (
        <HomeTemplate charactersCardList={<CharacterCardList characters={characters} />} />
      )}
      {fetch.status === 'error' && <Error />}
    </>
  )
}

export default HomePage
