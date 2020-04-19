import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'

import styles from './styles.module.css'

import { Series } from 'src/utils/types/series'

type SeriesCardProps = {
  className?: string
  series: Series
}

const SeriesCard = (props: SeriesCardProps) => {
  const { className = '', series } = props
  const classProps: string = `${className}`
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Card component="li" className={classProps}>
      <div className={styles.header}>
        <CardMedia
          className={styles.img}
          image={series.image}
          title={`Imagem da série ${series.title}`}
        />
        <Typography className={styles.title} variant="caption" component="h2">
          {series.title}
        </Typography>
        <IconButton
          className={`${styles.expand} ${isExpanded ? styles.onExpand : ''}`}
          aria-expanded={isExpanded}
          aria-label="Mostrar mais"
          onClick={handleExpand}>
          <ExpandMoreIcon />
        </IconButton>
      </div>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent className={styles.details}>
          <Typography>Detalhes sobre a série</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default SeriesCard
