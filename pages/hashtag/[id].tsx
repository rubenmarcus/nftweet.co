import { getCookie, hasCookie } from "cookies-next"
import { GetServerSidePropsContext } from "next"
import Head from "next/head"
import Header from "../../components/Header"
import Main from "../../components/Main"
import { MintPosts } from "../../components/Posts"
import { fetchTwitterPosts, fetchTwitterScreenShot } from "../../services/fetchTwitterPosts"

function SearchPage({ media, posts, id, users, pagToken }: any): JSX.Element {

  console.log(pagToken, 'pagToken')

  const tweets = posts.filter((post: any) => {
    return post.attachments?.media_keys?.length > 0
  })

  const screenshotTweets = posts.filter(
    (item: any) => !tweets.some((tweet: any) => tweet.id === item.id)
  )

  // console.log(tweets, "tweets")
  // console.log(screenshotTweets, "screenshot Tweets")

  return (
    <>
      <Head>
        <title>nftweet - #{id}</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Archivo+Black&family=Work+Sans:wght@400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main className='bg-gray-300 '>
        <h1 className='text-white bg-black p-3 text-3xl text-center  w-auto'>
          #{id}
        </h1>
        <MintPosts hashtag={id} posts={posts} media={media} users={users} token={pagToken} />
      </main>
    </>
  )
}

export const getServerSideProps = async ({
  query,
  req,
  res
}: GetServerSidePropsContext) => {
  const { id } = query

  const cookie = hasCookie('pagToken', {req,res});
  if(cookie) {
 
    const token = getCookie('pagToken', {req,res})

    console.log( 'token', token)
    const { posts, pagToken } = await fetchTwitterPosts(id as string, token as string)
    const tweets = posts?.data?.filter((post: any) => {
      return post.attachments?.media_keys?.length > 0
    })
  
  
   
  
    return {
      props: {
        media: posts?.includes?.media,
        posts: tweets,
        id: id,
        users: posts?.includes?.users,
        pagToken: pagToken
      },
    }

  } else {
    const { posts, pagToken } = await fetchTwitterPosts(id as string)
    const tweets = posts?.data?.filter((post: any) => {
      return post.attachments?.media_keys?.length > 0
    })
  
  
   
  
    return {
      props: {
        media: posts?.includes?.media,
        posts: tweets,
        id: id,
        users: posts?.includes?.users,
        pagToken: pagToken
      },
    }

  }
  console.log('cookie', cookie)
  
 
}

export default SearchPage
