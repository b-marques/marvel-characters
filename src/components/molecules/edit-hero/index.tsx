import React from 'react'

import IconButton from '@material-ui/core/IconButton'
import NavigateBefore from '@material-ui/icons/NavigateBefore'

import styles from './styles.module.css'
import { useHistory } from 'react-router-dom'
import { Character } from 'src/store/character/types'

type EditHeroProps = {
  className?: string
  character: Character
}

const EditHero = (props: EditHeroProps) => {
  const { className = '', character } = props
  const classProps: string = `${styles.hero} ${className}`
  const history = useHistory()

  const handleNavigateBack = () => {
    history.push(`/characters/${character.id}/${character.name}/details`)
  }

  return (
    <div
      className={classProps}
      style={{ backgroundImage: `url(${character.image})` }}
      aria-label={`Imagem do personagem ${character.name}`}>
      <IconButton className={styles.navigateBefore} onClick={handleNavigateBack}>
        <NavigateBefore />
      </IconButton>
    </div>
  )
}

export default EditHero
