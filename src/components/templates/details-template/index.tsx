import React, { ReactNode } from 'react'

import styles from './styles.module.css'

type DetailsTemplateProps = {
  detailsHeader: ReactNode
  detailsBody: ReactNode
}

const DetailsTemplate = (props: DetailsTemplateProps) => {
  const { detailsHeader, detailsBody } = props
  return (
    <section className={styles.content}>
      {detailsHeader}
      {detailsBody}
    </section>
  )
}

export default DetailsTemplate
