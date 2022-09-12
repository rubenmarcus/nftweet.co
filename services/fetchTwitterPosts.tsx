export const fetchTwitterPosts = async (hashtag: string) => {
  const TWITTER_URL = `https://api.twitter.com/2/tweets/search/recent?query=${hashtag}&tweet.fields=created_at&max_results=100&expansions=attachments.media_keys&media.fields=preview_image_url,url`
  const headers = {
    authorization:
      "Bearer AAAAAAAAAAAAAAAAAAAAABT%2BgwEAAAAA02t%2B49JW8tjqDzdNICYGr%2Ft7FZw%3DXaxrIEwumZJuI4PzagmpuxvItU4xzsYxTVrx76DWaw8f6K79Gb",
  }

  const fetchPosts = await (await fetch(TWITTER_URL, { headers })).json()

  return { posts: fetchPosts }
}

export const fetchTwitterScreenShot = async (tweetId: string) => {
  const fetchScreenshots = await (
    await fetch("https://tweetpik.com/api/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "4323d110-15dc-47b4-8e8e-3340deb37550",
      },
      body: JSON.stringify({
        tweetId: tweetId,
      }),
    })
  ).json()

  return { screenshots: fetchScreenshots }
}