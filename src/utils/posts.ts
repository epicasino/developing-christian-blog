export interface iPost {
  id: string;
  slug: string;
  publish: boolean;
  image: [
    {
      name: string;
      url: string;
      rawUrl: string;
    }
  ];
  verse?: string;
  date: string;
  subtitle: string;
  title: string;
  previewText: string;
}

export const getAllPosts = async () => {
  const fetchedPosts: Array<iPost> = await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_BLOG_ID}`,
    { cache: 'no-store' }
  )
    .then((res) => res.json())
    // enable this once we have a bit more recent posts
    .then((data) => {
      return data.filter((post: iPost) => post.publish);
    });
  return fetchedPosts;
};

export const getPost = async (slug: string) => {
  const postHeaders = await getAllPosts().then((posts) => {
    return posts.find((post) => post.slug === slug);
  });
  if (postHeaders) {
    const fetchedPostBlocks = await fetch(
      `https://notion-api.splitbee.io/v1/page/${postHeaders.id}`,
      { cache: 'no-store' }
    ).then((res) => res.json());
    // console.log(fetchedPostBlocks);
    return { postHeaders, fetchedPostBlocks };
  }
};
