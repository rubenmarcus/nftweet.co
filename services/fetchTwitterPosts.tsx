const AUTH = process.env.NEXT_TWITTER_BEARER_TOKEN;

export const fetchTwitterPosts = async (id: string) => {
  const TWITTER_URL = `https://api.twitter.com/2/tweets/search/recent?query=${id}(has%3Amedia%20-is%3Aretweet)&tweet.fields=created_at&user.fields=username,url,profile_image_url&max_results=100&expansions=attachments.media_keys,author_id&media.fields=preview_image_url,url`

  const headers = {
    authorization:
    AUTH,
  }

  const fetchPosts = await fetch(TWITTER_URL, { headers })

  const res = await fetchPosts.json()


  return { posts: res,}
}

export const fetchTwitterPost = async (id: string) => {
    const TWITTER_URL = `https://api.twitter.com/2/tweets/${id}?tweet.fields=created_at&user.fields=username,url,profile_image_url&expansions=attachments.media_keys,author_id&media.fields=preview_image_url,url`
  
    const headers = {
      authorization:
      AUTH,
    }
  
    const fetchPosts = await fetch(TWITTER_URL, { headers })
  
    const res = await fetchPosts.json()

    return { posts: res,}
  }

  export const fetchTwitterUserPosts = async (id: string) => {
    const TWITTER_URL = `https://api.twitter.com/2/tweets/search/recent?query=from%3A${id}(has%3Amedia%20-is%3Aretweet)&tweet.fields=created_at&user.fields=username,url,profile_image_url&expansions=attachments.media_keys,author_id&media.fields=preview_image_url,url`
  
    const headers = {
      authorization:
      AUTH,
    }
  
    const fetchPosts = await fetch(TWITTER_URL, { headers })

    console.log(
        'res', fetchPosts
    )
  
    const res = await fetchPosts.json()

    return { posts: res,}
  }