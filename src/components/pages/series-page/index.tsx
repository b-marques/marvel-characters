import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RootState } from 'src/store'

import SeriesTemplate from 'src/components/templates/series-template'
import SeriesCardList from 'src/components/organisms/series-card-list'
import SeriesHero from 'src/components/molecules/series-hero'
import { useSeriesFetch } from 'src/utils/hooks/useSeriesFetch'
import Loader from 'src/components/atoms/loader'
import Error from 'src/components/atoms/error'

const SeriesPage = () => {
  const history = useHistory()
  const fetch = useSeriesFetch(history.location.state)
  const character = (history.location.state as any)?.character

  const series = useSelector((state: RootState) => [
    ...state.characters.find(e => e.id === character.id)!.series,
  ])

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
          seriesCardList={<SeriesCardList seriesArray={series} />}
        />
      )}
      {fetch.status === 'error' && <Error />}
    </>
  )
}

export default SeriesPage
