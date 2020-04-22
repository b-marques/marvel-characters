import React, { ReactNode } from 'react'

import styles from './styles.module.css'

type HomeTemplateProps = {
  charactersCardList: ReactNode
}

const HomeTemplate = (props: HomeTemplateProps) => {
  const { charactersCardList } = props
  return (
    <>
      <div className={styles.navbar} />
      <section data-testid="cards-container" className={styles.content}>
        {charactersCardList}
      </section>
    </>
  )
}

export default HomeTemplate
