import { MbButton } from "mintbase-ui"
import { useWallet } from "../services/providers/WalletProvider"

function Header() {
  const { isConnected, details, signIn, signOut } = useWallet()

  const buttonLabel = isConnected
    ? `Sign Out ${details.accountId}`
    : " Connect NEAR Wallet"

  return (
    <>
      <nav className='flex  w-full bg-gray-100  sticky top-0 z-40 lg:border-b border-solid border-gray-150'>
        <h1 className='font-light head-font color-tweet w-full text-2xl justify-items-center 	 text-center align-centerr	 p-2 sm:p-4 border-gray-100'>
          nftweet.co
        </h1>
      </nav>

      <section className='main-section w-full bg-tweet '>
        <div className="w-60">
        <div className='h-full p-20 '>
          <div className='text-5xl text-black head-font text-center leading-[4rem]	'>
            Transform your tweets into <span className='bg-black text-white px-2'>NFTs!</span>
          </div>
          <ul className='text-2xl pt-10 text-black'>
          <h3>in only <span className="bg-black text-white px-2">3 steps:</span></h3>
            <li> - search the tweet, hashtag, or user you want mint it</li>
            <li> - login to your wallet</li>
            <li> - mint it</li>
          </ul>
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
