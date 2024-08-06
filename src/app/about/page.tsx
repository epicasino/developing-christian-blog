import ContentBreak from '@/components/utils/ContentBreak';
import React from 'react';

export default function page() {
  return (
    <main>
      <header className="h-[50vh] flex items-center justify-center">
        <div className="w-[80vw] xl:w-[50vw] flex flex-col items-center text-center gap-6">
          <h2 className="border-b-2 pb-2">
            Hello and Welcome to the Developing Christian Blog.
          </h2>
          <p className="font-light">
            {`This page was created to share the love and compassion of Jesus Christ
          to others through a continually growing and learning Christian. As a
          Christian, it is written that I must share my gifts given by God to
          spread the Good Word and to serve as a messenger of Jesus Christ's
          sacrifice to all.`}
          </p>
        </div>
      </header>
      <ContentBreak />
      <article className="h-[50vh] flex items-center justify-center">
        <div className="w-[80vw] xl:w-[50vw] flex flex-col items-center text-center gap-4">
          <p className="font-light">John 3:16</p>
          <h1 className="">
            “For God so loved the world that he gave his one and only Son, that
            whoever believes in him shall not perish but have eternal life.”
          </h1>
        </div>
      </article>
    </main>
  );
}
