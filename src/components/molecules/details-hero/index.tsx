import React from 'react'

import IconButton from '@material-ui/core/IconButton'
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import Typography from '@material-ui/core/Typography'

import styles from './styles.module.css'
import { useHistory } from 'react-router-dom'
import { Character } from 'src/store/character/types'

type DetailsHeroProps = {
  className?: string
  character: Character
}

const DetailsHero = (props: DetailsHeroProps) => {
  const { className = '', character } = props
  const classProps: string = `${styles.hero} ${className}`
  const history = useHistory()

  const handleClick = () => {
    history.push('/')
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
      <div style={{ display: 'flex' }}>
        <Typography className={styles.detailTitle} variant="subtitle1" component="h1">
          Nome:
        </Typography>
        <Typography className={styles.detailInfo} variant="subtitle1" component="h1">
          {character.name}
        </Typography>
      </div>
      {character.description !== '' && (
        <div style={{ display: 'flex' }}>
          <Typography className={styles.detailTitle} variant="body2" component="h1">
            Descrição:
          </Typography>
          <Typography className={styles.detailInfo} variant="body2" component="h1">
            {character.description}
          </Typography>
        </div>
      )}

      <Typography className={styles.text} variant="body2" component="h1">{`Séries:`}</Typography>
    </>
  )
}

export default DetailsHero
