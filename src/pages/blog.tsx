
import React , { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import BlogLayout from '../components/BlogLayout';




const Blog = () => {

    const [hashtagColor, setHashtagColor] = useState('')

  

    const data =  useStaticQuery(graphql`
    query GetBlogPosts {
        allMdx(
          sort: {fields: frontmatter___date, order: DESC}
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
        <BlogLayout title='blog'>
           <h1 className='text-4xl sm:text-5xl md:text-6xl py-4'>All Articles</h1>
            <hr />
            <ul className='porse'>
            {posts.map((post : any) => {
                let path = '/' + post.slug
                const section = post.slug.split('/')[0]
                return(
                    <li key={post.id}>
                        <div className='py-8'>
                        <Link to={path}>
                            <div className='flex justify-between w-100'>
                            <div className='flex flex-col justify-between'>
                                <h2 className='text-2xl sm:text-3xl md: text-4xl bold'>{post.frontmatter.title}</h2>
                                <p >{post.frontmatter.description}</p>
                            </div>
                            <div className='flex flex-col justify-between items-end'>
                                <p className={`mr-2 rounded px-1 text-sm ${section === 'dev' ? 'bg-hashtag-khaki' : 'bg-hashtag-green'}`}>#{section}</p>
                                <p className='mr-2'>{post.frontmatter.date}</p>
                            </div>
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

export default Blog
