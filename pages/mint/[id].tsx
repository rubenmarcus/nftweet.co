import { useContext } from "react"
import { PostsContext } from "../../context/posts.context"
import { Post } from "../../components/Post"
import { GetServerSidePropsContext } from "next"
import { fetchTwitterPost } from "../../services/fetchTwitterPosts"
import Head from "next/head"

 const MintPage = ({post, media, id, username}:any) => {

    // let postsData = useContext(PostsContext)

    console.log(post, media, id, username, 'posts')

    let image = { url: "", preview_image_url: "" }

    let images = []

   
    if (post?.attachments?.media_keys.length === 1) {
      image = media.find(
        (file: any) => file.media_key === post?.attachments?.media_keys[0]
      )
    }

    if (post?.attachments?.media_keys.length > 1) {
      images = media.filter((file: any) =>
        post?.attachments?.media_keys.includes(file.media_key)
      )
    }

    if (!image && !images) {
      return null
    }

    const data =  { images, image, post, username , tweetId:id } 

    return ( <>  <Head>
        <title>nftweet - lets Mint : {username.name} : {post?.text}</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Archivo+Black&family=Work+Sans:wght@400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Post data={data} /> 
      
      </>)

}


export const getServerSideProps = async ({
    query,
    req,
    res,
  }: GetServerSidePropsContext) => {
    const { id } = query
  
    const { posts } = await fetchTwitterPost(id as string)
  
    return {
      props: {
        media: posts?.includes?.media,
        post: posts.data,
        id: id,
        username: posts?.includes?.users[0],
      },
    }
  }
  

  


export default MintPage;