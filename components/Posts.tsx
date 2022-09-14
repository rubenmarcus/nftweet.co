import { Post } from "./Post"

export const MintPosts = ({ posts, users, media }: any) => {
  return (
    <section className='flex flex-wrap justify-center'>
      {posts?.map((post: any, i: number) => {
        let tweetId = posts[i]?.id
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
