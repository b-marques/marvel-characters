import React from 'react'

import IconButton from '@material-ui/core/IconButton'
import NavigateBefore from '@material-ui/icons/NavigateBefore'

import styles from './styles.module.css'
import { Character } from 'src/store/character/types'

type EditHeaderProps = {
  className?: string
  character: Character
  handleNavigateBack: () => void
}

const EditHeader = (props: EditHeaderProps) => {
  const { className = '', character, handleNavigateBack } = props
  const classProps: string = `${styles.hero} ${className}`

  return (
    <div
      className={classProps}
      style={{ backgroundImage: `url(${character.image})` }}
      aria-label={`Imagem do personagem ${character.name}`}>
      <IconButton
        className={styles.navigateBefore}
        onClick={handleNavigateBack}
        data-testid="navigate-back-button"
        aria-label="voltar para detalhes do personagem">
        <NavigateBefore />
      </IconButton>
    </div>
  )
}

export default EditHeader
