import { MbButton } from "mintbase-ui"
import Link from "next/link"
import { useContext, useState } from "react"
import {
  fetchTwitterPosts,
} from "../services/fetchTwitterPosts"
import { setCookie,  } from 'cookies-next';
import { useRouter } from "next/router";
import { PostsContext } from "../context/posts.context";


export const MintPosts = ({ posts, users, media}: any) => {
  const [mintId, setMintId] = useState("")


  const router = useRouter();
  const handleMintId = (id: string, tweetId: string) => {
    setMintId(`${tweetId}-${id}`)
  }

  let postsData = useContext(PostsContext);


  if(postsData.data.length > 0) {
    const newPosts = [...postsData.data, ...posts]

    // setTweets(newPosts)
    console.log('newPosts', newPosts)
  }



//   console.log( 'users', users)



  return (
    <>
      <section className='flex flex-wrap	  justify-center'>
        {posts ? posts.map((post:any , i:number) => {
          let tweetId = posts[i]?.id
            console.log(post , 'post')
          // const images = post?.attachments?.media_keys.length > 0 ? post?.attachments?.media_keys: ''
          let image = { url: "", preview_image_url: "" }

          let images = []

          const username = users.find((user:any) => user.id === post.author_id)
          console.log(username , 'username')

          if (post?.attachments?.media_keys.length === 1) {
            image = media.find(
              (file:any ) => file.media_key === post?.attachments?.media_keys[0]
            )
          }

          if (post?.attachments?.media_keys.length > 1) {
            images = media.filter((file:any ) =>
              post?.attachments?.media_keys.includes(file.media_key)
            )
          }

          if (!image && !images) {
            return null
          }

          return (
            <div className='flex flex-wrap p-10 bg-white w-10/12 mt-10  rounded-xl'>
              <div className='w-10/12'>
                {images.length > 1 ? (
                  <div className='flex flex-wrap w-7/12'>
                    <p className='w-full'>
                      Please select one of the images to mint:
                    </p>
                    {images.map((image: any) => {
                      return (
                        <div
                          className='cursor-pointer  w-5/12'
                          onClick={() => handleMintId(image.media_key, post.id)}
                        >
                          <img src={image.url} />
                        </div>
                      )
                    })}
                  </div>
                ) : null}
                {image?.url || image?.preview_image_url ? (
                  <div className='flex w-7/12'>
                    <img src={image.url ?? image.preview_image_url} />{" "}
                  </div>
                ) : null}
                <p className='w-full'>{posts[i].text}</p>
                <a href={`https://twitter.com/${username.username}`} target="_blank">
                  <img
                    src={username.profile_image_url}
                    className='rounded-full	'
                  />
                  {username.name}
                </a>
              </div>
              <div className='w-2/12'>
                <Link
                  href={!mintId ? `/mint/${tweetId}` : `/mint/${mintId}`}
                  passHref
                >
                  {images.length > 1 && !mintId ? (
                    <MbButton
                      label='MINT'
                      disabled={images.length > 0 && !mintId}
                    />
                  ) : (
                    <a>
                      <MbButton
                        label='MINT'
                        disabled={images.length > 0 && !mintId}
                      />
                    </a>
                  )}
                </Link>
              </div>
            </div>
          )
        }) : null}
      </section>
    </>
  )
}
