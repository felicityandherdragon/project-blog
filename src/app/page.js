import React from 'react';

import { getBlogPostList } from '@/helpers/file-helpers';

import BlogSummaryCard from '@/components/BlogSummaryCard';

import styles from './homepage.module.css';

import { BLOG_TITLE } from '@/constants';

export const metadata = {
  title: BLOG_TITLE,
  description: 'A wonderful blog about JavaScript',
};

async function Home() {
  const allBlogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {allBlogPosts.map(async (post) => {
        const { slug, title, publishedOn, abstract } = post;

        return (
          <BlogSummaryCard
            key={slug}
            slug={slug}
            title={title}
            publishedOn={publishedOn}
            abstract={abstract}
          />
        );
      })}
    </div>
  );
}

export default Home;
