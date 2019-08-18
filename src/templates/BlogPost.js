import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data }) => {
  console.log(data, "hi")
  console.log("FUK")
  return (
    <Layout>
      <h1>Blog Post Template</h1>
      <h1>{}</h1>
      <Img src="data.placeholderImage.childImageSharp.fluid"></Img>
    </Layout>
  )
}

export default BlogPostTemplate

// export const query = useStaticQuery(graphql`
//   query {
//     placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 300) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `)

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      author {
        name
      }
    }
  }
`
