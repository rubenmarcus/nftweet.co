import { GetServerSidePropsContext } from "next"
import Head from "next/head"
import Header from "../components/Header"
import Main from "../components/Main"
import { fetchTwitterPosts } from "../services/fetchTwitterPosts"

function Minter({ media, posts }: any): JSX.Element {
  // console.log("media", media)
  // console.log("posts", posts)

 
  // console.log(tweets, "tweets")
  // console.log(screenshotTweets, "screenshot Tweets")

  return (
    <>
      <Head>
        <title>nftweet</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      </>
  )
}

export const getServerSideProps = async ({
  res,
  req,
  query,
}: GetServerSidePropsContext) => {

  return {
    props: {},
  }
}

export default Minter
