import { MbButton } from "mintbase-ui"
import Link from "next/link"
import { useState } from "react"
import { fetchTwitterScreenShot } from "../services/fetchTwitterPosts"

export const MintPosts = ({ posts, users, media }: any) => {
  const [mintId, setMintId] = useState("")


  const handleMintId = (id: string, tweetId: string) => {

    setMintId(`${tweetId}-${id}`)
  }

  return (
    <section className='flex flex-wrap	  justify-center'>
      {posts.map((post, i) => {
        let tweetId = posts[i]?.id


        // const images = post?.attachments?.media_keys.length > 0 ? post?.attachments?.media_keys: ''
        let image = { url: "" , preview_image_url: ''}

        let images = []

       
        

        if (post?.attachments?.media_keys.length === 1) {
          image = media.find(
            (file) => file.media_key === post?.attachments?.media_keys[0]
          )

        

        }

        if (post?.attachments?.media_keys.length > 1) {
          images = media.filter((file) =>
            post?.attachments?.media_keys.includes(file.media_key)
          )

        }



        if(!image && !images) {
            return null;
        }
   

        return (
          <div className='flex flex-wrap p-10 bg-white w-10/12 mt-10  rounded-xl'>
            <div className='w-10/12'>
              {images.length > 1 ? (
                <div className="flex flex-wrap w-7/12">
                  <p className="w-full">Please select one of the images to mint:</p>
                  {images.map((image) => {
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
              {image?.url || image?.preview_image_url ? <div className="flex w-7/12"> <img src={image.url ??  image.preview_image_url} /> </div>: null}
              <p className='w-full'>{posts[i].text}</p>
              <p>
                <img
                  src={users[i]?.profile_image_url}
                  className='rounded-full	'
                />{" "}
                {users[i]?.name}
              </p>
            </div>
            <div className='w-2/12'>
              <Link href={!mintId? `/mint/${tweetId}`: `/mint/${mintId}`} passHref>
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
      })}
    </section>
  )
}
