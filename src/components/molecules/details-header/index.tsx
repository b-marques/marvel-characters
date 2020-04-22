import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import Edit from '@material-ui/icons/Edit'

import styles from './styles.module.css'
import { Character } from 'src/store/character/types'

type DetailsHeaderProps = {
  character: Character
  handleNavigateBack: () => void
  handleEdit: () => void
}

const DetailsHeader = (props: DetailsHeaderProps) => {
  const { character, handleNavigateBack, handleEdit } = props

  return (
    <div
      className={styles.header}
      style={{ backgroundImage: `url(${character.image})` }}
      aria-label={`Imagem do personagem ${character.name}`}>
      <IconButton
        className={styles.navigateBefore}
        onClick={handleNavigateBack}
        data-testid="navigate-back-button"
        aria-label="voltar para página inicial">
        <NavigateBefore />
      </IconButton>
      <IconButton
        className={styles.editAttributes}
        onClick={handleEdit}
        data-testid="edit-button"
        aria-label="editar personagem">
        <Edit />
      </IconButton>
    </div>
  )
}

export default DetailsHeader
