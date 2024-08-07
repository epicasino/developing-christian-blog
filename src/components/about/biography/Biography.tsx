import ContentBreak from '@/components/utils/ContentBreak';
import BibleQuote from './BibleQuote';
import HeaderBio from './HeaderBio';
import paragraphs from './paragraphs.json';
import QAndABox from './QAndABox';
import BibleQuoteBig from './BibleQuoteBig';

export default function Biography() {
  return (
    <section className="flex flex-col items-center my-12">
      <HeaderBio />
      <section className="w-[80vw] flex flex-col gap-8 lg:text-[.95rem] xl:text-2xl">
        {paragraphs.map((paragraph) => {
          if (paragraph.type === 'p') {
            return <p>{paragraph.text}</p>;
          }
          if (paragraph.type === 'bible' && paragraph.quote) {
            return (
              <BibleQuote
                quote={paragraph.quote}
                verse={paragraph.verse}
                verseLink={paragraph.verseLink}
              />
            );
          }
          if (paragraph.type === 'quote' && paragraph.quote) {
            return <BibleQuote quote={paragraph.quote} />;
          }
          if (paragraph.type === 'break') {
            return <ContentBreak />;
          }
          if (paragraph.type === 'question' && paragraph.text) {
            return <QAndABox text={paragraph.text} />;
          }
          if (paragraph.type === 'answer' && paragraph.text) {
            return <QAndABox text={paragraph.text} />;
          }
          if (paragraph.type === 'bibleBig' && paragraph.quote) {
            return (
              <BibleQuoteBig
                quote={paragraph.quote}
                verse={paragraph.verse}
                verseLink={paragraph.verseLink}
              />
            );
          }
        })}
      </section>
    </section>
  );
}
