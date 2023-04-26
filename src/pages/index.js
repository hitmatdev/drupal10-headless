import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


import ik from "../components/imagekit"

const imageUrl = ik.url({
  path: "home.png"
});

const IndexPage = () => (
  <Layout>
 

 <div class="container  ">
   <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
      <img src={imageUrl}  alt="Home" class="d-block mx-lg-auto img-fluid"  loading="lazy" />
    
      </div>
      <div class="col-lg-6">
         <h1 class="display-5 fw-bold lh-1 mb-3">Transforming Lives with Innovation, Science, Technology, Empathy and Care :)</h1>
         <p class="lead">We are a highly committed global biopharmaceutical company. Our goal is to advance new therapies for patients with rare orphan diseases</p>
         <div class="d-grid gap-2 d-md-flex justify-content-md-start"><a href="../about-us" class="btn btn-outline-primary btn-lg px-4">About Dunder Mifflin Pharma </a></div>
      </div>
   </div>
   <div class="row align-items-md-stretch">
      <div class="col-md-6">
         <div class="h-100 p-5 bg-light border-0 rounded-3">
            <h2>Driven by Science, Innovation and Dedication</h2>
            <p>Our core strength lies in our ability to excel in developing generics and technologically complex products backed by our dedicated teams in formulations, process chemistry, and analytical development.
               Our capabilities extend beyond the development of differentiated products, including liposomal products, inhalers, lyophilized injections, nasal sprays, and controlled release dosage forms.
            </p>
            <button class="btn btn-outline-primary" type="button">Know More</button>
         </div>
      </div>
      <div class="col-md-6">
         <div class="h-100 p-5 bg-light border-0 rounded-3">
            <h2>Our global footprints in patient care and pharma</h2>
            <p>Our core strength lies in our ability to excel in developing generics and technologically complex products backed by our dedicated teams in formulations, process chemistry, and analytical development.
               Our capabilities extend beyond the development of differentiated products, including liposomal products, inhalers, lyophilized injections, nasal sprays, and controlled release dosage forms.
            </p>
            <button class="btn btn-outline-primary" type="button">Know More</button>
         </div>
      </div>
   </div>
</div>

<div class="container">
  
<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
     
      <div class="col-lg-6">
         <h1 class="display-5 fw-bold lh-1 mb-3">Transforming Lives with Innovation, Science, Technology, Empathy and Care :)</h1>
         <p class="lead">We are a highly committed global biopharmaceutical company. Our goal is to advance new therapies for patients with rare orphan diseases</p>
         <div class="d-grid gap-2 d-md-flex justify-content-md-start"><a href="../about-us" class="btn btn-outline-primary btn-lg px-4">About Dunder Mifflin Pharma </a></div>
      </div>

      <div class="col-10 col-sm-8 col-lg-6">
      <StaticImage src="../images/home.png" alt="Home" class="d-block mx-lg-auto img-fluid"   loading="lazy" />
      </div>
   </div>

   <div class="row align-items-md-stretch">
      <div class="col-md-12">
         <div class="h-100 p-5 bg-light border-0 rounded-3">
         
         <blockquote class="blockquote text-center">
  <p class="mb-0 lead">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
  <footer class="blockquote-footer pt-4">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>

         </div>
      </div>
   
   </div>

</div>


<div class="container">

<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
           

            
            <div class="col-md-6">
              <div class="card mb-4 box-shadow border-0">
              <StaticImage src="../images/innovation1.png" alt="Home" class="d-block mx-lg-auto img-fluid"   loading="lazy"  data-holder-rendered="true" />
                <div class="card-body">
                <h2 class="card-title">Primary card title</h2>

                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-primary">More Details</button>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>

            
            <div class="col-md-6">
              <div class="card mb-4 box-shadow border-0">
              <StaticImage src="../images/innovation4.png" alt="Home" class="d-block mx-lg-auto img-fluid"   data-holder-rendered="true"  loading="lazy" />
                <div class="card-body">
                <h2 class="card-title">Primary card title</h2>

                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-primary">More Details</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
         
         
          
        
          

          
            
          
          </div>
        </div>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
