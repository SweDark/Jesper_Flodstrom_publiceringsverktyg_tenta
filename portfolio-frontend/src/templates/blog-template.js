import React from "react"
import { graphql} from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import { BlogTemplate} from "../elements/BlogElements"
import { ButtonCenter } from "../components/Button"

const ComponentName = ({ data }) => {
  console.log(data);
  const { content, title, desc } = data.blog

  return (
    <Layout>
       <SEO title={title} description={desc} />
      <BlogTemplate>
        <div>
          <article>
            <ReactMarkdown source={content} />
          </article>
          <ButtonCenter href={"/blog"}>Alla Artiklar</ButtonCenter>
        </div>
      </BlogTemplate>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
    }
  }
`

export default ComponentName
