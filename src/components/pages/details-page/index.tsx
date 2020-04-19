import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RootState } from 'src/store'

import DetailsTemplate from 'src/components/templates/details-template'
import SeriesCardList from 'src/components/organisms/series-card-list'
import DetailsHero from 'src/components/molecules/details-hero'
import { useSeriesFetch } from 'src/utils/hooks/useSeriesFetch'
import Loader from 'src/components/atoms/loader'
import Error from 'src/components/atoms/error'

const DetailsPage = () => {
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
          <DetailsTemplate
            seriesHero={<DetailsHero character={character} />}
            seriesCardList={<SeriesCardList seriesArray={[]} />}
          />
          <Loader />
        </>
      )}
      {fetch.status === 'loaded' && (
        <DetailsTemplate
          seriesHero={<DetailsHero character={character} />}
          seriesCardList={<SeriesCardList seriesArray={series} />}
        />
      )}
      {fetch.status === 'error' && <Error />}
    </>
  )
}

export default DetailsPage
