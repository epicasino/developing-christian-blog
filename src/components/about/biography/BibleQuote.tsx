import { iBibleQuote } from './types';

export default function BibleQuote({ quote, verse, verseLink }: iBibleQuote) {
  return (
    <article className="w-[80vw] transition border-4 border-zinc-800/50 hover:bg-zinc-800/40 rounded-md flex flex-row justify-start items-center">
      <header className="border-l-4 lg:pl-10 pl-5 pr-5 ml-5 my-6">
        <h4 className="xl:text-2xl text-base">{quote}</h4>
        {verse && verseLink && (
          <a href={verseLink} target="_blank" className="hover:underline">
            {verse}
          </a>
        )}
      </header>
    </article>
  );
}
