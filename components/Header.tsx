import { MbButton } from "mintbase-ui"
import { useWallet } from "../services/providers/WalletProvider"

function Header() {
  const { isConnected, details, signIn, signOut } = useWallet()

  const buttonLabel = isConnected
    ? `Sign Out ${details.accountId}`
    : " Connect NEAR Wallet"
  const videos = ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4"]
  const video = videos[Math.floor(Math.random() * videos.length)]

  return (
    <>
      <nav className='flex  w-full bg-black  fixed top-0 z-40 lg:border-b border-solid border-gray-450'>
        <h1 className='font-light head-font text-white w-full text-3xl justify-items-center 	 text-center align-centerr	 p-2 sm:p-4 border-gray-100'>
          nftweet.co
        </h1>
      </nav>

      <section className='main-section w-full bg-tweet '>
        <video autoPlay muted loop id='myVideo'>
          <source src={video} type='video/mp4' />
        </video>
        <div className='w-60'>
          <div className='flex flex-col h-screen justify-center items-center'>
            <div className='text-5xl text-white head-font text-center leading-[4rem]	'>
              Transform your tweets into <br />{" "}
              <span className='bg-black text-white px-2'>NFTs!</span>
            </div>
            <ul className='text-2xl pt-10 text-white'>
              <h3>
                in only{" "}
                <span className='bg-black text-white px-2'>3 steps:</span>
              </h3>
              <li> - search the tweet, hashtag, or user you want mint it</li>
              <li> - login to your wallet</li>
              <li> - mint it</li>
            </ul>

            <div className='flex inputBox'>
              <select>
                <option>hashtag</option>
                <option>username</option>
                <option>tweet</option>
              </select>
              <input
                type='text'
                className='inputSearch'
                placeholder='Search for hashtag'
              />
            </div>
          </div>
        </div>
      </section>
      {/* <MbButton
      onClick={isConnected ? signOut : signIn}2
      label={buttonLabel}
    /> */}
    </>
  )
}

export default Header
