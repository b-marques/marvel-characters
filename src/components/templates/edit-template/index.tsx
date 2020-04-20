import React, { ReactNode } from 'react'

type EditTemplateProps = {
  editHero: ReactNode
  inputFields: ReactNode
}

const EditTemplate = (props: EditTemplateProps) => {
  const { editHero, inputFields } = props
  return (
    <>
      {editHero}
      <section>{inputFields}</section>
    </>
  )
}

export default EditTemplate
