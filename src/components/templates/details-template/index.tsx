import React, { ReactNode } from 'react'

import styles from './styles.module.css'

type DetailsTemplateProps = {
  seriesHero: ReactNode
  seriesCardList: ReactNode
}

const DetailsTemplate = (props: DetailsTemplateProps) => {
  const { seriesHero, seriesCardList } = props
  return (
    <>
      {seriesHero}
      <section className={styles.content}>{seriesCardList}</section>
    </>
  )
}

export default DetailsTemplate
