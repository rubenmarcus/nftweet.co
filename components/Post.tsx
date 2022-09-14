import { MbButton } from "mintbase-ui"
import Link from "next/link"
import { useState } from "react"
import { MinterService } from "../services/MinterService"
import { useWallet } from "../services/providers/WalletProvider"

export const Post = ({
  data,
  isMintPage = false,
  isListPage = true,
}: {
  data: any
  isMintPage?: boolean
  isListPage?:boolean
}) => {
  const { images, image, post, username, tweetId } = data
  const { wallet, isConnected, signIn } = useWallet()


  const [mintId, setMintId] = useState("")

//   const handleMintId = (id: string, tweetId: string) => {
//     setMintId(`${tweetId}-${id}`)
//   }
  const imagesUrl = images[0]?.url ?? images[0]?.preview_image_url;
  
  console.log(image.url, images, imagesUrl, 'image')


  const mintIt = async () => {
    const metadata = {
      title: `${username.username}-${tweetId}`,
      description: post.text,
      store: "nftweet.mintspace2.testnet",
      type: "NEP171",
      category: "photo",
      media: images[0]? imagesUrl : image.url,
    }

    await MinterService(wallet, metadata)
  }

//   const shouldSelectImage = images?.length > 1 && !mintId

  return data ? (
    <div className='flex flex-wrap p-10 bg-white w-10/12 mt-10 postCard rounded-xl'>
      <div className='lg:w-4/12 sm:w-full  sm:justify-center sm:align-center sm:items-center sm:mb-10'>
        {images?.length > 1 ? (
          <div className='flex flex-wrap sm:place-items-center sm:w-full lg:w-7/12'>
            {/* {isMintPage ? (
              <p className='w-full'>Please select one of the images to mint:</p>
            ) : null} */}

            {images? ( <div className='flex sm:w-full sm:justify-center sm:align-center sm:items-center lg:w-7/12'>
            <img src={images[0].url ?? images[0].preview_image_url} />
          </div>): null}
            {/* {images?.map((image: any) => {
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
            })} */}
          </div>
        ) : null}
        {image?.url || image?.preview_image_url ? (
          <div className='flex  sm:justify-center sm:align-center sm:items-center   sm:w-full  lg:w-7/12'>
            <img src={image.url ?? image.preview_image_url} />
          </div>
        ) : null}
  </div>
        <div className="lg:w-5/12  sm:w-full  px-20">
        <p className='w-full'>{post?.text}</p>

   
        <a href={`https://twitter.com/${username?.username}`} className="w-full flex-wrap items-center text-2xl pt-10 flex" target='_blank'>
          <img src={username?.profile_image_url} className='rounded-full pr-4' />
          <p>{username?.name}</p>
        </a>
      </div>
    
      <div className='lg:w-2/12 sm:mt-20 sm:w-full justify-center align-center items-center flex'>
        {isListPage ? (
          <Link
            href={!mintId ? `/mint/${tweetId}` : `/mint/${mintId}`}
            passHref
          >
            <a>
              <MbButton label='MINT' />
            </a>
          </Link>
        ) : null}

        {isMintPage ? 
        
        !isConnected ? (
          <MbButton onClick={signIn} label='Connect NEAR Wallet to Mint' />
        ) : (
          <MbButton label='MINT' onClick={mintIt} />
        ): null}

       
      </div>
    </div>
  ) : null
}
