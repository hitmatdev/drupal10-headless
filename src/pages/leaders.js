import React from 'react'
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ik from "../components/imagekit"

const imageUrl = ik.url({
  path: "home.png"
});

export const query = graphql`
{
  allmembers: allNodeMembers(
    sort: {field_director_weight: ASC}
    
  ) {
    nodes {
      title
      field_member_job_title
      field_member_group
      body {
        summary
        value
        processed
        format
      }
      field_director_weight
      field_leadership
    }
  }
  directors: allNodeMembers(filter: {field_member_group: {eq: "Directors"}} 
   sort: {field_director_weight: ASC}) {
    nodes {
      title
      field_member_job_title
      field_member_group
      body {
        summary
        value
        processed
        format
      }
      field_director_weight
      field_leadership
    }
  }
  leaders: allNodeMembers(filter: {field_member_group: {eq: "Leadership"}}) {
    nodes {
      title
      field_member_job_title
      field_member_group
      body {
        summary
        value
        processed
        format
      }
      field_director_weight
      field_leadership
    }
  }
}`

const DrupalPage = ({ data }) => {
  const members = data.allmembers.nodes
  const directors = data.directors.nodes


  return (
    
    <Layout>


<div class="container  ">
   <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
      <h1>Leadership & Board of Directors</h1>

      <div>
      <ul class="list-group">
      {members.map((member) => (
       <li class="list-group-item"> <div key={member.title}>
          <h4>{member.title}</h4>
          {member.field_member_group.map((group) => (
           <span class="p-2"><button class="btn btn-outline-success btn-sm " key={group}>{group}</button></span>
          ))}


         <p>{member.field_member_job_title}</p>
          <div dangerouslySetInnerHTML={{ __html: member.body.value }} />
        </div>
      </li>
      ))}
      </ul>
    </div>
    
      </div>
      <div class="col-lg-6">
      <h1>Board of Directors</h1>
      <div>
      <ul class="list-group">
      {directors.map((member) => (
       <li class="list-group-item"> <div key={member.title}>
          <h4>{member.title}</h4>
          {member.field_member_group.map((group) => (
           <span class="p-2"><button class="btn btn-outline-success btn-sm " key={group}>{group}</button></span>
          ))}


         <p>{member.field_member_job_title}</p>
          <div dangerouslySetInnerHTML={{ __html: member.body.value }} />
        </div>
      </li>
      ))}
      </ul>
    </div>
         
      </div>
   </div>
</div>
    
  

    </Layout>
  )
}

export default DrupalPage
