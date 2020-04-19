import React from 'react'

import styles from './styles.module.css'

import { Series } from 'src/utils/types/series'
import SeriesCard from 'src/components/molecules/series-card'

type SeriesCardListProps = {
  className?: string
  seriesArray: Series[]
}

const SeriesCardList = (props: SeriesCardListProps) => {
  const { className = '', seriesArray } = props
  const classProps: string = `${styles.content} ${className}`

  return (
    <ul className={classProps} aria-label="conjunto de cards de séries">
      {seriesArray.map(series => (
        <SeriesCard key={series.id} series={series} />
      ))}
    </ul>
  )
}

export default SeriesCardList
