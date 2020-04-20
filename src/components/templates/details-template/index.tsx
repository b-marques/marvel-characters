import React, { ReactNode } from 'react'

type DetailsTemplateProps = {
  detailsHeader: ReactNode
  detailsBody: ReactNode
}

const DetailsTemplate = (props: DetailsTemplateProps) => {
  const { detailsHeader, detailsBody } = props
  return (
    <>
      {detailsHeader}
      {detailsBody}
    </>
  )
}

export default DetailsTemplate
