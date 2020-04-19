import React from 'react'
import Typography from '@material-ui/core/Typography'

import styles from './styles.module.css'

const Error = () => {
  return (
    <div className={styles.error}>
      <Typography component="h1" variant="h5">
        Algo deu errado!
      </Typography>
    </div>
  )
}

export default Error
