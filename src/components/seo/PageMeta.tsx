import React from 'react'
import { Helmet } from 'react-helmet'

export interface IPageMetaProps {
  title: string
  description?: string
  lang?: string
  meta?: (
    | { name?: undefined; content: string; property: string }
    | { name: string; content: string; property?: undefined }
  )[]
}

const PageMeta = (props: IPageMetaProps) => {
  const { description, lang, meta = [], title } = props

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:type`,
          content: `website`
        }
      ].concat(meta)}
    />
  )
}

PageMeta.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

export default PageMeta
