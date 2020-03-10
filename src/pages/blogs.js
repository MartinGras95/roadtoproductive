import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import blogStyles from "./blog.module.scss"

const BlogPage = () => {
    // Query getting the markdown files from the file system
    const data = useStaticQuery(graphql`
        query blogInfoQuery {
        allMarkdownRemark {
            edges {
            node {
                frontmatter {
                title
                date
                }
                html
                excerpt
                fields {
                slug
                }
            }
            }
        }
        }    
    `)


    return(
        <Layout>
        <Head title="Blogs" />
        <h1>Blog Posts</h1>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) =>{
                    return(
                        <li className={blogStyles.post}>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </Link>
                        </li>
                    )
                })}
            </ol>
        
        </Layout>
    )
}

export default BlogPage