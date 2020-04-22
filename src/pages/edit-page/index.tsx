import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams, Redirect } from 'react-router-dom'
import { RootState } from 'src/store'

import styles from './styles.module.css'

import EditTemplate from 'src/components/templates/edit-template'
import EditHeader from 'src/components/molecules/edit-header'
import EditFields from 'src/components/molecules/edit-fields'

type EditPageParams = {
  characterId: string
}

const EditPage = () => {
  const history = useHistory()
  const params = useParams<EditPageParams>()
  const characterId = parseInt(params.characterId)
  const handleNavigateBack = (id: number, name: string) => {
    history.push(`/characters/${id}/${name}/details`)
  }
  const character = useSelector((state: RootState) =>
    state.characters.find(e => e.id === characterId),
  )

  if (!character) return <Redirect to="/" />

  return (
    <div className={styles.page}>
      <EditTemplate
        editHero={
          <EditHeader
            character={character}
            handleNavigateBack={() => handleNavigateBack(character.id, character.name)}
          />
        }
        inputFields={<EditFields character={character} />}
      />
    </div>
  )
}

export default EditPage
