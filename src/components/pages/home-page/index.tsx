import React from 'react'

import SearchBar from 'src/components/molecules/search-bar'
import HomeTemplate from 'src/components/templates/home-template'
import CharacterCardList from 'src/components/organisms/character-card-list'
import { useCharactersFetch } from 'src/utils/hooks/useCharactersFetch'
import Loader from 'src/components/atoms/loader'

const search = (character: string) => {
  console.log(character)
}

const HomePage = () => {
  const fetch = useCharactersFetch()

  return (
    <>
      {fetch.status === 'loading' && (
        <>
          <SearchBar search={search} />
          <Loader />
        </>
      )}
      {fetch.status === 'loaded' && (
        <>
          <SearchBar search={search} />
          <HomeTemplate charactersCardList={<CharacterCardList characters={fetch.payload} />} />
        </>
      )}
      {fetch.status === 'error' && <div>Something wrong happened</div>}
    </>
  )
}

export default HomePage
