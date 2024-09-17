import { getPost, iPost } from '@/utils/posts';
import './styles.css';
import Image from 'next/image';
import React from 'react';
import dayjs from 'dayjs';

import { NotionRenderer } from 'react-notion';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  const { postHeaders } = post || {};
  if (postHeaders) {
    return {
      title: postHeaders.title,
      description: postHeaders.previewText.slice(0, 10) + '...',
    };
  } else
    return {
      title: 'error fetching page',
    };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  // console.log(post);

  return (
    post && (
      <>
        <header className="pt-[10vh] xl:w-[60vw] md:w-[80vw] flex flex-col items-center gap-5 text-center">
          <h1 className="text-5xl border-b-4 pb-3">{post.postHeaders.title}</h1>
          <h2 className="w-full xl:w-[50vw]">{post.postHeaders.subtitle}</h2>
          <div className="flex gap-10 w-full justify-center">
            <h5>{`Published: ${dayjs(post.postHeaders.date).format(
              'MMM DD, YYYY'
            )}`}</h5>
            {post.postHeaders.verse && (
              <h5>{`Verse of the Day: ${post.postHeaders.verse}`}</h5>
            )}
          </div>
          <div className="border-4 p-2 rounded-lg">
            <Image
              src={post.postHeaders.image[0].url}
              alt="Blog Image (Replace Soon)"
              width={0}
              height={0}
              className="w-fit xl:w-[50vw] rounded-md"
              unoptimized
            />
          </div>
        </header>
        <NotionRenderer blockMap={post?.fetchedPostBlocks} />
      </>
    )
  );
}

// pt-[10vh]
