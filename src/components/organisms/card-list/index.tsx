import React, { PropsWithChildren } from 'react'

import styles from './styles.module.css'

import Card from 'src/components/molecules/card'
import { Typography } from '@material-ui/core'

type CardType = {
  id: number
  title: string
  image: string
}

type CardListProps<T> = {
  className?: string
  cards: T[]
  ariaLabel: string
  testId: string
  onClick: (id: number, title: string) => void
}

function CardList<T extends CardType>(props: PropsWithChildren<CardListProps<T>>) {
  const { className = '', cards, ariaLabel, testId, onClick } = props
  const classProps: string = `${styles.content} ${className}`

  return (
    <ul data-testid={`cards-list-${testId}`} className={classProps} aria-label={ariaLabel}>
      {cards.length ? (
        cards.map(card => (
          <Card
            key={card.id}
            title={card.title}
            image={card.image}
            ariaLabel="card"
            onClick={() => onClick(card.id, card.title)}
          />
        ))
      ) : (
        <Typography className={styles.noCharacters} component="li" variant="caption">
          Nenhum personagem encontrado.
        </Typography>
      )}
    </ul>
  )
}

export default CardList
