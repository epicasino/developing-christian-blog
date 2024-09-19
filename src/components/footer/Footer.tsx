import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="h-[8vh] w-full flex justify-between items-center px-10">
      <h3 className="transition hover:scale-110">
        <a
          href="https://www.biblegateway.com/passage/?search=Romans%2010:13&version=NIV"
          target="_blank"
        >
          Romans 10:13
        </a>
      </h3>
      <div className="flex flex-row gap-5">
        <a
          href="https://github.com/epicasino/developing-christian-blog"
          className="transition hover:scale-105"
          target="_blank"
        >
          <Image
            src={'/github.svg'}
            alt="GitHub Logo"
            height={0}
            width={0}
            className="h-10 w-10 invert"
          />
        </a>
        <a
          href="mailto:developingchristian@gmail.com"
          className="transition hover:scale-105"
          target="_blank"
        >
          <Image
            src={'/email.svg'}
            alt="Email Logo"
            height={0}
            width={0}
            className="h-10 w-10 invert"
          />
        </a>
      </div>
    </footer>
  );
}
