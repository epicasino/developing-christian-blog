import React from 'react';
import ContentBreak from '../utils/ContentBreak';

export default function Header() {
  return (
    <header className="lg:h-[50vh] h-screen flex items-center justify-center">
      <div className="w-[80vw] xl:w-[50vw] flex flex-col items-center text-center gap-6">
        <h1 className="border-b-2 pb-2 xl:text-5xl">
          Hello and Welcome to the Developing Christian Blog.
        </h1>
        <p className="font-light text-lg xl:text-xl">
          {`This page was created to share the love and compassion of Jesus Christ
          to others through a continually growing and learning Christian. As a
          Christian, it is written that I must share my gifts given by God to
          spread the Good Word and to serve as a messenger of Jesus Christ's
          sacrifice to all.`}
        </p>
      </div>
    </header>
  );
}
