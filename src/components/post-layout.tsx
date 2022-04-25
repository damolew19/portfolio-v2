import * as React from "react";
import { Link } from "gatsby";
import BlogLayout from "./blog-layout";

export default function PostLayout({ children, pageContext }) {
  const { title, description } = pageContext.frontmatter;

  return (
    <BlogLayout title={title} description={description} å>
      {children}
      <Link to="/blog">&larr; back</Link>
    </BlogLayout>
  );
}