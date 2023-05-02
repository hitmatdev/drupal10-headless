import React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ik from "../components/imagekit"

export const query = graphql`
{
  allNodeBasicPage(filter: {field_page_id: {eq: "solution"}}) {
    edges {
      node {
        id
        body {
          value
        }
        field_page_id
        field_hero_title
        field_hero_description
        relationships {
          field_sections {
            ... on paragraph__card_content {
              id
              field_title
              field_description
            }
            ... on paragraph__cta_2_column {
              id
              field_title
            }
            ... on paragraph__cta_3_column {
              id
            }
          }
        }
      }
    }
  }
}
`

const DrupalPage = ({ data }) => {
  const edges = data.allNodeBasicPage.edges
console.log("edges",edges);
  return (
   
   <Layout>
   
   <div className="container">
      {edges.map((page) => (
        <div key={page.node.id}>

          <h2 className="text-uppercase text-info">{page.node.field_hero_title}</h2>
          <p>{page.node.field_hero_description}</p>
           
           <hr></hr>

           <p>{page.node.relationships.field_sections[2].field_title}</p>
           <p>{page.node.relationships.field_sections[3].field_title}</p>


          <div>

          </div>
        </div>
      ))}
    </div>
</Layout>
  )
}

export default DrupalPage
