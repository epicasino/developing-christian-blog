import React from 'react';

export default function Quote() {
  return (
    <section className="h-[50vh] flex items-center justify-center">
      <div className="w-[80vw] xl:w-[50vw] flex flex-col items-center text-center gap-4 transition hover:scale-110">
        <a
          className="transition hover:scale-110 hover:underline"
          href="https://www.biblegateway.com/passage/?search=john%203:16&version=NIV"
          target="_blank"
        >
          John 3:16
        </a>
        <h1>
          “For God so loved the world that he gave his one and only Son, that
          whoever believes in him shall not perish but have eternal life.”
        </h1>
      </div>
    </section>
  );
}
