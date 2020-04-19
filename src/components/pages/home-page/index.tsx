import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'src/store'
import { useCharactersFetch } from 'src/utils/hooks/useCharactersFetch'
import SearchBar from 'src/components/molecules/search-bar'
import HomeTemplate from 'src/components/templates/home-template'
import CharacterCardList from 'src/components/organisms/character-card-list'
import Loader from 'src/components/atoms/loader'
import Error from 'src/components/atoms/error'

const HomePage = () => {
  const [nameStartsWith, setNameStartsWith] = useState('')
  const fetch = useCharactersFetch(nameStartsWith)
  const characters = useSelector((state: RootState) => state.characters)

  const search = (character: string) => {
    setNameStartsWith(character)
  }

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
