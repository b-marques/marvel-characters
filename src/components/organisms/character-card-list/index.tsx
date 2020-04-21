import React from 'react'

import styles from './styles.module.css'

import { Character } from 'src/store/character/types'
import CharacterCard from 'src/components/molecules/character-card'
import { Typography } from '@material-ui/core'

type CharacterCardListProps = {
  className?: string
  characters: Character[]
}

const CharacterCardList = (props: CharacterCardListProps) => {
  const { className = '', characters } = props
  const classProps: string = `${styles.content} ${className}`

  return (
    <ul
      data-testid="cards-list"
      className={classProps}
      aria-label="conjunto de cards de personagens">
      {characters.length ? (
        characters.map(character => <CharacterCard key={character.id} character={character} />)
      ) : (
        <Typography className={styles.noCharacters} component="li" variant="caption">
          Nenhum personagem encontrado.
        </Typography>
      )}
    </ul>
  )
}

export default CharacterCardList
