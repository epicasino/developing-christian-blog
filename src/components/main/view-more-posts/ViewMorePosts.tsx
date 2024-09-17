export default function ViewMorePosts() {
  return (
    <div className="relative transition duration-250 ease-in-out my-16 w-[60vw] hover:scale-110">
      <a
        className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] font-semibold bg-zinc-950 px-20 py-3 rounded-lg lg:text-xl transition hover:bg-zinc-900 duration-250 ease-in-out text-lg"
        href="/posts"
      >
        View More Posts
      </a>
      <svg
        viewBox="0 0 1368 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="lg:mx-24 mx-8 transition"
      >
        <line y1="17" x2="1368" y2="17" stroke="white" stroke-width="2" />
      </svg>
    </div>
  );
}
