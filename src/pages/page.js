import React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ik from "../components/imagekit"

export const query = graphql`
{
  allNodeBasicPage(filter: {field_page_id: {eq: "solution"}}) {
    nodes {
      field_hero_title
      field_hero_description
      field_page_id
      relationships {
        field_sections {
          ... on paragraph__rich_text {
            id
            field_text {
              value
            }
          }
        }
      }
    }
  }
}
`

const DrupalPage = ({ data }) => {
  const pages = data.allNodeBasicPage.nodes

  return (
   
   <Layout>
   
   <div class="container">
      {pages.map((page) => (
       <div>
         
         <h1>{page.field_hero_title}</h1>
         <p>{page.field_hero_description}</p>

         <hr></hr>
         <div>
          <h3>Para 1</h3>
         <div dangerouslySetInnerHTML={{ __html: page.relationships.field_sections[0].field_text.value }} />
         <h3>Para 2</h3>

         <div dangerouslySetInnerHTML={{ __html: page.relationships.field_sections[1].field_text.value }} />

         <h3>Para 3</h3>

        <div dangerouslySetInnerHTML={{ __html: page.relationships.field_sections[4].field_text.value }} />
         </div>

        </div>
      ))}
    </div>
</Layout>
  )
}

export default DrupalPage
