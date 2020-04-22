import React, { ReactNode } from 'react'

import styles from './styles.module.css'

type EditTemplateProps = {
  editHero: ReactNode
  inputFields: ReactNode
}

const EditTemplate = (props: EditTemplateProps) => {
  const { editHero, inputFields } = props
  return (
    <section className={styles.content}>
      {editHero}
      {inputFields}
    </section>
  )
}

export default EditTemplate
