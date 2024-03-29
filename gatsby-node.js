const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const slash = require('slash');

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for Wordpress pages (route : /{slug})
// Will create pages for Wordpress posts (route : /post/{slug})
exports.createPages = ({
  graphql,
  actions,
}) => {
  const {
    createPage,
  } = actions;
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local Wordpress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
    graphql(
      `
            {
              allWordpressPost {
                edges {
                  node {
                    id
                    slug
                    status
                    template
                    format
                  }
                  next {
                    wordpress_id
                    id
                    slug
                    title
                  }
                  previous {
                    wordpress_id
                    id
                    slug
                    title
                  }
                }
              }
            }
          `,
    ).then((result) => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }
      const postTemplate = path.resolve('./src/templates/post.js');
      const issuePage = path.resolve('./src/pages/issue.js');

      // creating page for issue 

      createPage({
        path: '/issues',
        component: issuePage,
      })

      // We want to create a detailed page for each
      // post node. We'll just use the Wordpress Slug for the slug.
      // The Post ID is prefixed with 'POST_'
      _.each(result.data.allWordpressPost.edges, (edge) => {
        let currentNext = edge.next ? edge.next.slug : "";
        let currentPrev = edge.previous ? edge.previous.slug : "";
        let currentNextTitle = edge.next ? edge.next.title  : "";
        let currentPrevTitle = edge.previous ? edge.previous.title : "";

        let nextObject = {
          next: {
            slug: currentPrev, 
            title: currentPrevTitle
          }, 
          prev: {
            slug: currentNext, 
            title: currentNextTitle
          }
        }
        createPage({
          path: `/blog/${edge.node.slug}`,
          component: slash(postTemplate),
          context: {
            id: edge.node.id,
            pagination: nextObject
          },
        });
      });
      resolve();
    });
    // ==== END POSTS ====

    // ==== PAGES ====
    graphql(
      `
      {
        allWordpressPage {
          edges {
            node {
              id
              title
              content
              excerpt
              date
              modified
              slug
              status
            }
          }
        }
      }
          `,
    ).then((result) => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }
      const pageTemplate = path.resolve('./src/templates/page.js');
      // We want to create a detailed page for each
      // post node. We'll just use the Wordpress Slug for the slug.
      // The Post ID is prefixed with 'POST_'
      _.each(result.data.allWordpressPage.edges, (edge) => {
        createPage({
          path: `/${edge.node.slug}`,
          component: slash(pageTemplate),
          context: {
            id: edge.node.id,
          },
        });
      });
      resolve();
    });
    // ==== END PAGES ====

  });
};