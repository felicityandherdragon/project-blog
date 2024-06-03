import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { loadBlogPost } from '@/helpers/file-helpers';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';

async function BlogPost({ params }) {
  const content = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={content.frontmatter.title}
        publishedOn={content.frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content.content} />
      </div>
    </article>
  );
}

export default BlogPost;
