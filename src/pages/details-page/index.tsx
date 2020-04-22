import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams, Redirect } from 'react-router-dom'
import { RootState } from 'src/store'

import styles from './styles.module.css'

import DetailsTemplate from 'src/components/templates/details-template'
import DetailsBody from 'src/components/molecules/details-body'
import DetailsHeader from 'src/components/molecules/details-header'
import { useSeriesFetch } from 'src/utils/hooks/useSeriesFetch'
import Error from 'src/components/atoms/error'
import { slugify } from 'voca'

type DetailsPageParams = {
  characterId: string
}

const DetailsPage = () => {
  const history = useHistory()
  const params = useParams<DetailsPageParams>()
  const characterId = parseInt(params.characterId)
  const character = useSelector((state: RootState) =>
    state.characters.find(e => e.id === characterId),
  )
  const fetch = useSeriesFetch(character)

  if (!character) return <Redirect to="/" />

  const handleNavigateBack = () => {
    history.push('/?reload=false')
  }

  const handleEdit = (id: number, name: string) => {
    history.push(`/characters/${id}/${slugify(name)}/edit`)
  }

  return (
    <div className={styles.page}>
      {fetch.status === 'loading' && (
        <DetailsTemplate
          detailsHeader={
            <DetailsHeader
              handleNavigateBack={handleNavigateBack}
              handleEdit={() => handleEdit(character.id, character.name)}
              character={character}
            />
          }
          detailsBody={<DetailsBody isLoading={true} character={character} />}
        />
      )}
      {fetch.status === 'loaded' && (
        <DetailsTemplate
          detailsHeader={
            <DetailsHeader
              handleNavigateBack={handleNavigateBack}
              handleEdit={() => handleEdit(character.id, character.name)}
              character={character}
            />
          }
          detailsBody={<DetailsBody isLoading={false} character={character} />}
        />
      )}
      {fetch.status === 'error' && <Error />}
    </div>
  )
}

export default DetailsPage
