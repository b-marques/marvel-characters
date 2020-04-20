import React from 'react'
import Typography from '@material-ui/core/Typography'

import styles from './styles.module.css'
import { Character } from 'src/store/character/types'
import SeriesCardList from 'src/components/organisms/series-card-list'

type DetailsBodyProps = {
  character: Character
}

const DetailsBody = (props: DetailsBodyProps) => {
  const { character } = props
  return (
    <dl>
      <div style={{ display: 'flex' }}>
        <Typography
          id="label-nome"
          className={styles.detailTitle}
          variant="subtitle1"
          component="dt">
          Nome:
        </Typography>
        <Typography className={styles.detailInfo} variant="subtitle1" component="dd">
          {character.name}
        </Typography>
      </div>
      {character.description !== '' && (
        <div style={{ display: 'flex' }}>
          <Typography className={styles.detailTitle} variant="body2" component="dt">
            Descrição:
          </Typography>
          <Typography className={styles.detailInfo} variant="body2" component="dd">
            {character.description}
          </Typography>
        </div>
      )}

      <Typography className={styles.text} variant="body2" component="dt">{`Séries:`}</Typography>
      <dd>
        <SeriesCardList seriesArray={character.series} />
      </dd>
    </dl>
  )
}

export default DetailsBody
