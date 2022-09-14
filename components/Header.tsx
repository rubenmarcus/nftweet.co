import { MbButton } from "mintbase-ui"
import Link from "next/link"
import { useState } from "react"
import { useWallet } from "../services/providers/WalletProvider"

function Header() {
  const [placeholder, setPlaceholder] = useState("search by hashtag")
  const [searchQuery, setQuery] = useState("")
  const [opt, setOpt] = useState("hashtag")

  const handleVal = (e: any) => {
    console.log(searchQuery, "searchQuery")
    setQuery(e.target.value)
  }

  const changePlaceHolder = (e: any) => {
    let name = ""

    if (e.target.value === "hashtag") {
      name = "search by #"
      setOpt("hashtag")
    }

    if (e.target.value === "username") {
      name = "search by username"
      setOpt("user")
    }

    if (e.target.value === "tweet") {
      name = "type tweet id"
      setOpt("mint")
    }
    setPlaceholder(name)
  }

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

            <div className='flex inputBox home'>
              <select onChange={(e) => changePlaceHolder(e)}>
                <option>hashtag</option>
                <option>username</option>
                <option>tweet</option>
              </select>
              <input
                type='text'
                className='inputSearch'
                placeholder={placeholder}
                onChange={(e) => handleVal(e)}
              />
              <Link href={`${opt}/${searchQuery}`} passHref shallow>
                <a>
                  <MbButton label='GO' />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
