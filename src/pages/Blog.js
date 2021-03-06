import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql, Link } from 'gatsby';

const Blog = () => (
  <StaticQuery
    query={graphql`
    query BlogAllPostQuery {
      allWordpressPost(sort: { fields: [date], order:DESC }) {
        edges {
          node {
            date(formatString: "DD, MMM YYYY")
            title
            excerpt            
            slug
            author {
                id
                name                
            }
          }
        }
      }
    }
  `}
    render={data => (              
        <div>
          <Link to="/">Go Back</Link>
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="blog-grids">
                {
                    data.allWordpressPost.edges.map(({ node }) => (                      
                  <div key={node.slug} className="grid">
                    <div className="entry-media">
                      { node.featured_media && (
                      <Img
                        src={node.featured_media.localFile.childImageSharp.sizes.src}
                        sizes={node.featured_media.localFile.childImageSharp.sizes}
                        alt="blog_image_one"
                        className="img-fluid"
                      />
                      )}
                    </div>
                    <div className="entry-body">
                      <span className="cat">{node.categories && node.categories.map(category => `${category.name}, `)}</span>
                      <h3><Link to={`/blog/${node.slug}`} dangerouslySetInnerHTML={{ __html: node.title }} /></h3>
                      <p>
                          {node.author.name}
                      </p>
                      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                      <div className="read-more-date">
                        <Link to={`/blog/${node.slug}`}>Read More..</Link>
                        <span className="date">{node.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      )      
}
  />
);


export default Blog;
