import * as React from "react";
import { Link } from "gatsby";
import BlogLayout from "./BlogLayout";

export default function PostLayout({ children, pageContext } :
  {
    children: any;
    pageContext: any;
  }
  ) {
  const { title, description } = pageContext.frontmatter;

  return (
    <BlogLayout title={title} description={description} >
      {children}
      <div className='flex justify-end'>
        <Link  to="/blog">&larr; back</Link>
      </div>
      
    </BlogLayout>
  );
}