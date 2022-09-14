import { MbButton } from "mintbase-ui"
import Link from "next/link"
import { useContext, useState } from "react"
import { fetchTwitterPosts } from "../services/fetchTwitterPosts"
import { setCookie } from "cookies-next"
import { useRouter } from "next/router"
import { PostsContext } from "../context/posts.context"
import { Post } from "./Post"

export const MintPosts = ({ posts, users, media }: any) => {
  return (
    <section className='flex flex-wrap	  justify-center'>
      {posts?.map((post: any, i: number) => {
        let tweetId = posts[i]?.id
        console.log(post, "post")
        // const images = post?.attachments?.media_keys.length > 0 ? post?.attachments?.media_keys: ''
        let image = { url: "", preview_image_url: "" }

        let images = []

        const username = users.find((user: any) => user.id === post.author_id)
       

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

        const data =  { images, image, post, username , tweetId } 

        return <Post data={data} />
      })}
    </section>
  )
}
