import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="h-[8vh] w-full flex justify-between items-center px-10">
      <h1>Romans 10:13</h1>
      <div className="flex flex-row gap-5">
        <a>
          <Image
            src={'/github.svg'}
            alt="GitHub Logo"
            height={0}
            width={0}
            className="h-10 w-10 invert"
          />
        </a>
        <a>
          <Image
            src={'/linkedin.svg'}
            alt="GitHub Logo"
            height={0}
            width={0}
            className="h-10 w-10 invert"
          />
        </a>
        <a>
          <Image
            src={'/email.svg'}
            alt="GitHub Logo"
            height={0}
            width={0}
            className="h-10 w-10 invert"
          />
        </a>
      </div>
    </footer>
  );
}
