import React from 'react'

import SearchBar from 'src/components/molecules/search-bar'
import HomeTemplate from 'src/components/templates/home-template'
import CharacterCardList from 'src/components/organisms/character-card-list'
import { useCharactersFetch } from 'src/utils/hooks/useCharactersFetch'
import Loader from 'src/components/atoms/loader'
import Error from 'src/components/atoms/error'

const search = (character: string) => {
  console.log(character)
}

const HomePage = () => {
  const fetch = useCharactersFetch()

  return (
    <>
      <SearchBar search={search} />
      {fetch.status === 'loading' && <Loader />}
      {fetch.status === 'loaded' && (
        <HomeTemplate charactersCardList={<CharacterCardList characters={fetch.payload} />} />
      )}
      {fetch.status === 'error' && <Error />}
    </>
  )
}

export default HomePage
