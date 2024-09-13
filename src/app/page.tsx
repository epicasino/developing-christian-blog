import Article from '@/components/main/articles/Article';
import MainArticle from '@/components/main/articles/MainArticle';
import VerseOfTheDay from '@/components/main/verse-of-the-day/VerseOfTheDay';
import ViewMorePosts from '@/components/main/view-more-posts/ViewMorePosts';
import ContentBreak from '@/components/utils/ContentBreak';
import { getAllPosts } from '@/utils/posts';
import dayjs from 'dayjs';

const featuredPosts = async () => {
  const posts = await getAllPosts().then((posts) => {
    return posts.length > 4 ? posts.slice(0, 3) : posts;
  });
  return posts;
};

export default async function Home() {
  const posts = await featuredPosts();
  const latestPost = posts[0];
  const threePosts = posts.slice(1, 3);
  // console.log(posts);

  return (
    <>
      <VerseOfTheDay />
      <ContentBreak />
      {latestPost && (
        <MainArticle
          title={latestPost.title}
          date={dayjs(latestPost.date).format('MMM DD, YYYY')}
          verse={latestPost.verse || ''}
          text={latestPost.previewText}
          image={latestPost.image[0].url}
          slug={latestPost.slug}
        />
      )}
      <ContentBreak />
      <h2 className="self-center mt-10 border-b-2 pb-2">Recent Posts</h2>
      {threePosts.map(
        (post) =>
          post && (
            <Article
              key={post.id}
              title={post.title}
              date={dayjs(post.date).format('MMM DD, YYYY')}
              verse={post.verse || ''}
              text={post.previewText}
              image={post.image[0].url}
              slug={post.slug}
            />
          )
      )}
      <ViewMorePosts />
    </>
  );
}
