import { getPost } from '@/utils/posts';
import Image from 'next/image';
import React from 'react';
import dayjs from 'dayjs';

import { NotionRenderer } from 'react-notion';

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  // console.log(post);

  return (
    post && (
      <>
        <header className="pt-[10vh] w-[60vw] flex flex-col items-center">
          <h1>{post.postHeaders.title}</h1>
          <h4 className="text-center">{post.postHeaders.subtitle}</h4>
          <h5>{dayjs(post.postHeaders.date).format('MMM DD, YYYY')}</h5>
          <Image
            src={post.postHeaders.image[0].url}
            alt="Blog Image (Replace Soon)"
            width={0}
            height={0}
            className="w-[40vw]"
            unoptimized
          />
          <h5>{`Verse of the Day: ${post.postHeaders.verse}` || ''}</h5>
        </header>
        <NotionRenderer blockMap={post?.fetchedPostBlocks} />
      </>
    )
  );
}

// pt-[10vh]
