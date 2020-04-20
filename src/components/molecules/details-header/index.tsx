import React from 'react'
import { slugify } from 'voca'
import IconButton from '@material-ui/core/IconButton'
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import Edit from '@material-ui/icons/Edit'

import styles from './styles.module.css'
import { useHistory } from 'react-router-dom'
import { Character } from 'src/store/character/types'

type DetailsHeaderProps = {
  character: Character
}

const DetailsHeader = (props: DetailsHeaderProps) => {
  const { character } = props
  const history = useHistory()

  const handleNavigateBack = () => {
    history.push('/?reload=false')
  }

  const handleEdit = () => {
    history.push(`/characters/${character.id}/${slugify(character.name)}/edit`)
  }

  return (
    <div
      className={styles.header}
      style={{ backgroundImage: `url(${character.image})` }}
      aria-label={`Imagem do personagem ${character.name}`}>
      <IconButton
        className={styles.navigateBefore}
        onClick={handleNavigateBack}
        aria-label="voltar para página inicial">
        <NavigateBefore />
      </IconButton>
      <IconButton
        className={styles.editAttributes}
        onClick={handleEdit}
        aria-label="editar personagem">
        <Edit />
      </IconButton>
    </div>
  )
}

export default DetailsHeader
