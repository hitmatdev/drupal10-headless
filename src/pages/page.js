import React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ik from "../components/imagekit"

export const query = graphql`
{
  allNodePage(
    filter: {field_page_name: {eq: "page1"}, relationships: {node_type: {}}}
  ) {
    edges {
      node {
        id
        title
        field_page_name
        body {
          value
        }
        relationships {
          field_para_example {
            ... on paragraph__cta_one {
              id
              field_cta_one_name
              field_cta_one_bio
            }
            ... on paragraph__quote {
              id
              field_para_quote
            }
          }
        }
      }
    }
  }
}
`

const DrupalPage = ({ data }) => {
  const pages = data.allNodePage.edges

  return (
   
   <Layout>
   
   <div class="container">
      {pages.map((page) => (
        <div key={page.node.title}>
          <h2>{page.node.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: page.node.body.value }} />

          <div>
         <h1>Relationships</h1>

         <p>{page.node.relationships.field_para_example[0].field_cta_one_name}</p>
         <p class="text-small">{page.node.relationships.field_para_example[0].field_cta_one_bio}</p>
         <p class="text-info">{page.node.relationships.field_para_example[1].field_para_quote}</p>
        

          </div>
        </div>
      ))}
    </div>
</Layout>
  )
}

export default DrupalPage
