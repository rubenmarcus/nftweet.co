import { MbButton } from "mintbase-ui"
import Link from "next/link"
import { useState } from "react"

export const Post = ({
  data,
  isMintPage,
}: {
  data: any
  isMintPage?: boolean
}) => {
  const { images, image, post, username, tweetId } = data

  console.log("isMintPage", isMintPage)

  const [mintId, setMintId] = useState("")

  const handleMintId = (id: string, tweetId: string) => {
    setMintId(`${tweetId}-${id}`)
  }

  return data ? (
    <div className='flex flex-wrap p-10 bg-white w-10/12 mt-10  rounded-xl'>
      <div className='w-10/12'>
        {images?.length > 1 ? (
          <div className='flex flex-wrap w-7/12'>
            {isMintPage ? (
              <p className='w-full'>Please select one of the images to mint:</p>
            ) : null}
            {images?.map((image: any) => {
              return isMintPage ? (
                <div
                  className='cursor-pointer  w-5/12'
                  onClick={() => handleMintId(image.media_key, post.id)}
                >
                  <img src={image.url} />
                </div>
              ) : (
                <div className='w-5/12'>
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
        <p className='w-full'>{post?.text}</p>
        <a href={`https://twitter.com/${username?.username}`} target='_blank'>
          <img src={username?.profile_image_url} className='rounded-full	' />
          {username?.name}
        </a>
      </div>
      <div className='w-2/12'>
        {images?.length > 1 && !mintId ? (
          <MbButton label='MINT' disabled={images?.length > 0 && !mintId} />
        ) : (
          <Link
            href={!mintId ? `/mint/${tweetId}` : `/mint/${mintId}`}
            passHref
          >
            <a>
              <MbButton label='MINT' disabled={images?.length > 0 && !mintId} />
            </a>
          </Link>
        )}
      </div>
    </div>
  ) : null
}
