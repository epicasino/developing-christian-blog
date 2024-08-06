import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="h-[10vh] w-screen flex justify-between items-center px-10 fixed bg-black/75">
      <a href="/">
        <Image
          src={'/developing-christian-logo.svg'}
          alt="Developing Christian Logo"
          height={0}
          width={0}
          className="h-fit w-fit transition hover:opacity-80"
        />
      </a>
      <ul className="flex flex-row gap-5 font-semibold text-lg">
        <li className="navbar-links">
          <a href="/posts">Posts</a>
        </li>
        <li className="navbar-links">
          <a href="/about">About</a>
        </li>
        <li className="navbar-links">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
