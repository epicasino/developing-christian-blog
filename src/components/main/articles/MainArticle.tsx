import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { iArticle } from './types';

const MainArticle: FC<iArticle> = ({
  date,
  title,
  verse,
  text,
  image,
  slug,
}) => {
  return (
    <Link href={`/posts/${slug}`}>
      <article className="min-h-[50vh] xl:w-[60vw] lg:w-[90vw] grid lg:grid-cols-2 p-10 items-center justify-center transition hover:bg-zinc-800/50 m-5 rounded-md gap-10 self-center">
        <section className="flex flex-col h-full gap-2 justify-center">
          <p className="font-light">{date}</p>
          <div className="flex flex-row justify-between items-end">
            <h2>{title}</h2>
            <p>{verse}</p>
          </div>
          <p className="indent-4">
            {text.split(' ').slice(0, 150).join(' ') + '...'}
          </p>
        </section>
        <Image
          src={image}
          width={685}
          height={414}
          className="xl:w-full xl:h-auto rounded-md"
          alt="preview image"
          unoptimized
        />
      </article>
    </Link>
  );
};

export default MainArticle;
