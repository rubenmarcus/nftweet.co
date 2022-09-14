import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"


function SuccessPage(): JSX.Element {
  const router = useRouter()

  const video = "success.mp4"

  return (
    <section className='main-section w-full bg-tweet'>
        <Head>
        <title>nftweet - Success!</title>
        
      </Head>
      <video autoPlay muted loop id='myVideo'>
        <source src={video} type='video/mp4' />
      </video>
      <div className='w-60'>
        <div className='flex flex-col h-screen justify-center items-center'>
          <div className='text-5xl text-white head-font text-center leading-[4rem]	'>
            your tweet was minted as an
            <br /> <span className='bg-black text-white px-2'>NFT!</span>
          </div>
          <ul className='text-2xl pt-10 text-white'>
            <li>
              {" "}
              visit the
              <a
                className='bg-black text-white px-2'
                href='https://testnet.mintbase.io/contract/nftweet.mintspace2.testnet?tab=nfts&page=0'
                target='_blank'
              >
                mintbase store
              </a>
            </li>
            <li>
              or{" "}
              <Link href='/' passHref shallow>
                <a className='bg-black text-white px-2'>search again</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SuccessPage
