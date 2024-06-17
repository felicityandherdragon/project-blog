import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import CodeSnippet from '@/components/CodeSnippet';
import DivisionGroupsDemo from '@/components/DivisionGroupsDemo';

import { loadBlogPost } from '@/helpers/file-helpers';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';

export async function generateMetadata({ params }) {
  const content = await loadBlogPost(params.postSlug);

  return {
    title: content.frontmatter.title,
    description: content.frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const content = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={content.frontmatter.title}
        publishedOn={content.frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote
          source={content.content}
          components={{
            pre: CodeSnippet,
            DivisionGroupsDemo,
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
