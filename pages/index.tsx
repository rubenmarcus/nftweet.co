import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import { fetchTwitterPosts } from '../services/fetchTwitterPosts';

function Minter({media, posts}:any): JSX.Element {

  console.log('media', media)
  console.log('posts', posts)

  const tweets = posts.filter((post:any) => { 
    return post.attachments?.media_keys?.length > 0;
   })


  const screenshotTweets =
   posts.filter((item:any) => !tweets.some((tweet:any) => tweet.id === item.id))
 



console.log(tweets,  'tweets')
console.log(screenshotTweets,  'screenshot Tweets')


  return (
    <div className="flex flex-1 flex-col min-h-screen text-gray-500">
      {/* <Head>
        <title>Mintbase - Simple Minter Example</title>
      </Head>
      <Header />
      <div className="mx-6 sm:mx-24 mt-4 mb-4">
        <Main />
      </div> */}
    </div>
  );
}

export const getServerSideProps = async ({
  res,
  req,
  query,
}: GetServerSidePropsContext) => {
 

  const { posts } = await fetchTwitterPosts('mintbase');

  console.log(posts, 'posts')

  return {
    props: {media: posts.includes.media, posts: posts.data},
  }
}


export default Minter;
