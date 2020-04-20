import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from 'src/store'

import styles from './styles.module.css'

import DetailsTemplate from 'src/components/templates/details-template'
import DetailsBody from 'src/components/molecules/details-body'
import DetailsHeader from 'src/components/molecules/details-header'
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
            detailsHeader={<DetailsHeader character={character} />}
            detailsBody={<DetailsBody character={character} />}
          />
          <Loader />
        </>
      )}
      {fetch.status === 'loaded' && (
        <DetailsTemplate
          detailsHeader={<DetailsHeader character={character} />}
          detailsBody={<DetailsBody character={character} />}
        />
      )}
      {fetch.status === 'error' && <Error />}
    </div>
  )
}

export default DetailsPage
