import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { slugify } from 'voca'

import { RootState } from 'src/store'
import { useQuery } from 'src/utils/hooks/useQuery'
import { useCharactersFetch } from 'src/utils/hooks/useCharactersFetch'
import SearchBar from 'src/components/molecules/search-bar'
import HomeTemplate from 'src/components/templates/home-template'
import CardList from 'src/components/organisms/card-list'
import Loader from 'src/components/atoms/loader'
import Error from 'src/components/atoms/error'

const HomePage = () => {
  const query = useQuery()
  const history = useHistory()
  const search = query.get('search') !== null ? String(query.get('search')) : ''
  const reload = query.get('reload') === null || query.get('reload') === 'true'
  const fetch = useCharactersFetch(search, reload)
  const characters = useSelector((state: RootState) => state.characters)

  const handleDoSearch = (character: string) => {
    history.push(`/?search=${character}`)
  }

  const handleCardClick = (id: number, name: string) => {
    history.push(`/characters/${id}/${slugify(name)}/details`)
  }

  return (
    <>
      <SearchBar searchTerm={search} doSearch={handleDoSearch} />
      {fetch.status === 'loading' && <Loader />}
      {fetch.status === 'loaded' && (
        <HomeTemplate
          charactersCardList={
            <CardList
              cards={characters.map(({ name: title, ...rest }) => ({ title, ...rest }))}
              onClick={handleCardClick}
              testId="characters"
              ariaLabel="conjunto de cards de personagens"
            />
          }
        />
      )}
      {fetch.status === 'error' && <Error />}
    </>
  )
}

export default HomePage
