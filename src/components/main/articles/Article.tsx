import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { iArticle } from './types';

const Article: FC<iArticle> = ({ date, title, verse, text, image, slug }) => {
  return (
    <article className="min-h-[20vh] xl:w-[60vw] lg:w-[90vw]">
      <Link
        href={`/posts/${slug}`}
        className=" flex lg:flex-row flex-col p-10 gap-10 items-center justify-center transition hover:bg-zinc-800/50 m-5 rounded-md self-center"
      >
        <section className="flex flex-col h-full gap-2 justify-center">
          <p className="font-light">{date}</p>
          <div className="flex flex-row justify-between items-end">
            <h2>{title}</h2>
            <p>{verse}</p>
          </div>
          <p className="indent-4">
            {text.split(' ').slice(0, 50).join(' ') + '...'}
          </p>
        </section>
        <Image
          src={image}
          width={685}
          height={414}
          className="lg:h-[15vh] w-auto rounded-md"
          alt="preview image"
          unoptimized
        />
      </Link>
    </article>
  );
};

export default Article;
