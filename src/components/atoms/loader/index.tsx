import React from 'react'
import { Typography } from '@material-ui/core'

import styles from './styles.module.css'

const Loader = () => {
  const classProps: string = `${styles.loader} z`
  return (
    <div className={classProps}>
      <Typography component="h1" variant="h5">
        Loading
        <span className={styles.dot}>.</span>
        <span className={styles.dot}>.</span>
        <span className={styles.dot}>.</span>
      </Typography>
    </div>
  )
}

export default Loader
