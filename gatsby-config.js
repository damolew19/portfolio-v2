module.exports = {

  siteMetadata: {
    title: `Damien Lewinski`,
    siteUrl: `https://www.damienlewinski.com`,
    description: 'The personal website of Damien Lewinski',
    img: ''
  },
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    'gatsby-plugin-postcss', 
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `./src/images/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "posts",
        "path": `./src/posts/`
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        "path": `./src/posts/`
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts : {
          posts: require.resolve('./src/components/post-layout.tsx')
        }, 
      },
    }
]
};


