// export const fetchTwitterAuthor = async(id:string) => {

//     const URL = `https://api.twitter.com/2/users`
// }

export const fetchTwitterPosts = async (id: string) => {
  const TWITTER_URL = `https://api.twitter.com/2/tweets/search/recent?query=${id}(has%3Amedia%20-is%3Aretweet)&tweet.fields=created_at&user.fields=username,url,profile_image_url&max_results=100&expansions=attachments.media_keys,author_id&media.fields=preview_image_url,url`

  const headers = {
    authorization:
      "Bearer AAAAAAAAAAAAAAAAAAAAABT%2BgwEAAAAA02t%2B49JW8tjqDzdNICYGr%2Ft7FZw%3DXaxrIEwumZJuI4PzagmpuxvItU4xzsYxTVrx76DWaw8f6K79Gb",
  }

  const fetchPosts = await fetch(TWITTER_URL, { headers })

  const res = await fetchPosts.json()


  return { posts: res,}
}

export const fetchTwitterPost = async (id: string) => {
    const TWITTER_URL = `https://api.twitter.com/2/tweets/${id}?tweet.fields=created_at&user.fields=username,url,profile_image_url&expansions=attachments.media_keys,author_id&media.fields=preview_image_url,url`
  
    const headers = {
      authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAABT%2BgwEAAAAA02t%2B49JW8tjqDzdNICYGr%2Ft7FZw%3DXaxrIEwumZJuI4PzagmpuxvItU4xzsYxTVrx76DWaw8f6K79Gb",
    }
  
    const fetchPosts = await fetch(TWITTER_URL, { headers })
  
    const res = await fetchPosts.json()
  
  
    return { posts: res,}
  }