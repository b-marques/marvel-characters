import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import SeriesTemplate from 'src/components/templates/series-template'
import SeriesCardList from 'src/components/organisms/series-card-list'
import SeriesHero from 'src/components/molecules/series-hero'
import { useSeriesFetch } from 'src/utils/hooks/useSeriesFetch'
import { Character } from 'src/utils/types/character'
import Loader from 'src/components/atoms/loader'
import Error from 'src/components/atoms/error'

const SeriesPage = () => {
  const history = useHistory()

  useEffect(() => {
    if (history.action === 'POP') {
      history.push('/')
    }
  })

  const fetch = useSeriesFetch(history.location.state)

  if (!history.location.state) return null

  const character = (history.location.state as any).character as Character

  return (
    <>
      {fetch.status === 'loading' && (
        <>
          <SeriesTemplate
            seriesHero={<SeriesHero character={character} />}
            seriesCardList={<SeriesCardList seriesArray={[]} />}
          />
          <Loader />
        </>
      )}
      {fetch.status === 'loaded' && (
        <SeriesTemplate
          seriesHero={<SeriesHero character={character} />}
          seriesCardList={<SeriesCardList seriesArray={fetch.payload} />}
        />
      )}
      {fetch.status === 'error' && <Error />}
    </>
  )
}

export default SeriesPage
