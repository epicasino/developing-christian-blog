import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-screen flex justify-between items-center px-5 lg:px-10 py-2 fixed bg-black/75">
      <a href="/">
        <Image
          src={'/developing-christian-logo.svg'}
          alt="Developing Christian Logo"
          height={0}
          width={0}
          className="lg:h-fit lg:w-fit h-10 w-auto transition hover:opacity-80"
        />
      </a>
      <ul className="flex flex-row gap-5 font-semibold text-sm lg:text-lg">
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
