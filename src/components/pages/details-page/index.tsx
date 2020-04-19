import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from 'src/store'

import styles from './styles.module.css'

import DetailsTemplate from 'src/components/templates/details-template'
import SeriesCardList from 'src/components/organisms/series-card-list'
import DetailsHero from 'src/components/molecules/details-hero'
import { useSeriesFetch } from 'src/utils/hooks/useSeriesFetch'
import Loader from 'src/components/atoms/loader'
import Error from 'src/components/atoms/error'

type DetailsPageParams = {
  characterId: string
}

const DetailsPage = () => {
  const params = useParams<DetailsPageParams>()
  const characterId = parseInt(params.characterId)
  const character = useSelector((state: RootState) =>
    state.characters.find(e => e.id === characterId),
  )
  const fetch = useSeriesFetch(character)

  if (!character) return <Error />

  return (
    <div className={styles.page}>
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
          seriesCardList={<SeriesCardList seriesArray={character.series} />}
        />
      )}
      {fetch.status === 'error' && <Error />}
    </div>
  )
}

export default DetailsPage
