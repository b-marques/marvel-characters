import React from 'react'

import styles from './styles.module.css'

import { Series } from 'src/store/character/types'
import SeriesCard from 'src/components/molecules/series-card'
import { Typography } from '@material-ui/core'

type SeriesCardListProps = {
  className?: string
  seriesArray: Series[]
}

const SeriesCardList = (props: SeriesCardListProps) => {
  const { className = '', seriesArray } = props
  const classProps: string = `${styles.content} ${className}`

  return (
    <ul
      className={classProps}
      aria-label="conjunto de cards de séries"
      data-testid="card-list-series">
      {seriesArray.length ? (
        seriesArray.map(series => <SeriesCard key={series.id} series={series} />)
      ) : (
        <Typography className={styles.noSeries} component="li" variant="caption">
          Nenhuma série encontrada
        </Typography>
      )}
    </ul>
  )
}

export default SeriesCardList
