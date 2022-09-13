import { MbButton } from "mintbase-ui"
import Link from "next/link"

export const MintPosts = ({ posts, users }: any) => {
  console.log(posts[0], "posts")
  console.log(users[0], "posts")

  return <section className="flex flex-wrap	  justify-center">{posts.map((post, i) => {
    console.log(users[i], "users")

    return (
      <div className='flex flex-wrap p-10 bg-white w-10/12 mt-10  rounded-xl'>
        <div className='w-10/12'>
          <p className='w-full'>{posts[i].text}</p>
          <p>
            <img src={users[i]?.profile_image_url} className='rounded-full	' />{" "}
            {users[i]?.name}
          </p>
        </div>
        <div className='w-2/12'>
          {" "}
          <Link href={`/mint/${posts[i]?.id}`} passHref>
            <a>
              <MbButton label='MINT' />
            </a>
          </Link>
        </div>
      </div>
    )
  })}</section>
}
