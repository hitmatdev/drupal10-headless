import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
  {
    allNodeArticle {
      nodes {
        title
        body {
          value
        }
      }
    }
  }
`

const DrupalPage = ({ data }) => {
  const articles = data.allNodeArticle.nodes

  return (
    <div>
      {articles.map((article) => (
        <div key={article.title}>
          <h2>{article.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: article.body.value }} />
        </div>
      ))}
    </div>
  )
}

export default DrupalPage
