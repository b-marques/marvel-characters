import React from 'react'

import IconButton from '@material-ui/core/IconButton'
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import Typography from '@material-ui/core/Typography'

import styles from './styles.module.css'
import { useHistory } from 'react-router-dom'
import { Character } from 'src/store/character/types'

type SeriesHeroProps = {
  className?: string
  character: Character
}

const SeriesHero = (props: SeriesHeroProps) => {
  const { className = '', character } = props
  const classProps: string = `${styles.hero} ${className}`
  const history = useHistory()

  const handleClick = () => {
    history.goBack()
  }

  return (
    <>
      <div
        className={classProps}
        style={{ backgroundImage: `url(${character.image})` }}
        aria-label={`Imagem do personagem ${character.name}`}>
        <IconButton className={styles.navigateBefore} onClick={handleClick}>
          <NavigateBefore />
        </IconButton>
      </div>
      <Typography
        className={styles.text}
        variant="h5"
        component="h1">{`Estas são as séries nas quais ${character.name} se encontra.`}</Typography>
    </>
  )
}

export default SeriesHero
