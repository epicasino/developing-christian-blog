export default function Summary() {
  return (
    <section className="flex flex-col items-center justify-center gap-24">
      <h2 className="w-[80vw] xl:w-[70vw] flex flex-col items-center text-center gap-6">
        I am an ordinary programmer who seeks to spread the love of God through
        the lens of an ordinary person, so that others may be delivered and
        saved from sin. Again, I humbly ask for your attention to hear that
        there is a living God, and He sent His Son to Earth to save us all from
        sin. He is a loving Father who always seeks for His children to join Him
        in His kingdom in Heaven.
      </h2>
      <article className="w-[80vw] xl:w-[70vw] flex flex-col items-center text-center gap-4 transition hover:scale-110">
        <h1>
          {
            'For you, Lord, have delivered me from death, my eyes from tears, my feet from stumbling,'
          }
        </h1>
        <a
          className="transition hover:scale-110 hover:underline"
          href="https://www.biblegateway.com/passage/?search=Psalm%20116%3A8&version=NIV"
          target="_blank"
        >
          Psalm 116:8 NIV
        </a>
      </article>
    </section>
  );
}
