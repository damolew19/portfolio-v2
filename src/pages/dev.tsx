
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import BlogLayout from '../components/BlogLayout'


const Dev = () => {

    const data =  useStaticQuery(graphql`
    query GetDevBlogPosts {
        allMdx(
          sort: {fields: frontmatter___date, order: DESC}
          filter: {slug: {glob: "dev/*"}}
        ) {
          nodes {
            frontmatter {
              title
              description
              date(formatString: "DD/MM/YYYY")
            }
            id
            slug
          }
        }
      }
    `);

    const posts = data.allMdx.nodes;
    
        
        
      
    return(
        <BlogLayout title='Blog - Dev'>
           <h1 className='text-4xl sm:text-5xl md:text-6xl py-4'>Dev Articles</h1>
            <hr />
            <ul className='porse'>
            {posts.map((post : any) => {
                let path ='/' + post.slug
                return(
                    <li key={post.id}>
                        <div className='py-8'>
                        <Link to={path}>
                            <h2 className='text-2xl sm:text-3xl md: text-4xl bold'>{post.frontmatter.title}</h2>
                            <div className='flex justify-between w-100'>
                            <p >{post.frontmatter.description}</p>
                            <p>
                            {post.frontmatter.date}</p>
                            </div>
                            
                        </Link>
                        </div>
                        <hr />
                    </li>
                    
                )
            })}
            </ul>
            
        </BlogLayout>
    )
}

export default Dev
