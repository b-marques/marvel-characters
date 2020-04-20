import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from 'src/store'

import styles from './styles.module.css'

import EditTemplate from 'src/components/templates/edit-template'
import EditHero from 'src/components/molecules/edit-hero'
import Error from 'src/components/atoms/error'
import EditFields from 'src/components/molecules/edit-fields'

type EditPageParams = {
  characterId: string
}

const EditPage = () => {
  const params = useParams<EditPageParams>()
  const characterId = parseInt(params.characterId)
  const character = useSelector((state: RootState) =>
    state.characters.find(e => e.id === characterId),
  )

  if (!character) return <Error />

  return (
    <div className={styles.page}>
      <EditTemplate
        editHero={<EditHero character={character} />}
        inputFields={<EditFields character={character} />}
      />
    </div>
  )
}

export default EditPage
