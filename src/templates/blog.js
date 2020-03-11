// This file contains the template for each blog post page

import React from 'react'

import Layout from '../components/layout'
import { graphql} from 'gatsby'
import Head from "../components/head"
import { DiscussionEmbed } from "disqus-react"
// Graphql query to get specific blog @@@@MARKDOWN@@@
// first the query brings in a variable which is the slug variable of the page (line 13)
// then uses the variable to filter the query to get correct blog data (line 15)
export const query = graphql`
  query (
    $slug: String!
  ) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date
      }
      fields{
        slug
      }
      html
      id
    }
  }
`


const Blog = (props) =>{
  // Disqus details
  const disqusShortName = 'roadtoproductive'
  const disqusConfig = {
  identifier: props.data.markdownRemark.id,
  title: props.data.markdownRemark.frontmatter.title,
  url: `https://roadtoproductive.netlify.com/blog/${props.data.markdownRemark.fields.slug}`
}
  
      return(

          <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title}/>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
            
            <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
          </Layout>
      )
  }
  
  
  export default Blog