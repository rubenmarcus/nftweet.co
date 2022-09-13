import { GetServerSidePropsContext } from "next"
import Head from "next/head"
import Header from "../components/Header"
import Main from "../components/Main"
import { fetchTwitterPosts } from "../services/fetchTwitterPosts"

function Minter({ media, posts }: any): JSX.Element {
  console.log("media", media)
  console.log("posts", posts)

  const tweets = posts.filter((post: any) => {
    return post.attachments?.media_keys?.length > 0
  })

  const screenshotTweets = posts.filter(
    (item: any) => !tweets.some((tweet: any) => tweet.id === item.id)
  )

  console.log(tweets, "tweets")
  console.log(screenshotTweets, "screenshot Tweets")

  return (
    <div className='flex flex-1 flex-col min-h-screen text-gray-500'>
      <Head>
        <title>nftweet.co</title>

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <Header />
    </div>
  )
}

export const getServerSideProps = async ({
  res,
  req,
  query,
}: GetServerSidePropsContext) => {
  const { posts } = await fetchTwitterPosts("mintbase")

  console.log(posts, "posts")

  return {
    props: { media: posts.includes.media, posts: posts.data },
  }
}

export default Minter
