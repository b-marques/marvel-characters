import React from 'react'
import MUICard from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import styles from './styles.module.css'

type CardProps = {
  className?: string
  title: string
  image: string
  ariaLabel: string
  onClick: () => void
}

const Card = (props: CardProps) => {
  const { className = '', title, image, ariaLabel, onClick } = props
  const classProps = `${styles.card} ${className}`

  return (
    <MUICard component="li" className={classProps}>
      <CardActionArea className={styles.actionArea} onClick={onClick}>
        <CardMedia
          className={styles.image}
          image={image}
          title={ariaLabel}
          aria-label={ariaLabel}
          component="div"
        />
        <CardContent className={styles.content}>
          <Typography className={styles.name} variant="caption" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MUICard>
  )
}

export default Card
