const url = `https://www.googleapis.com/youtube/v3/search?channelId=${process.env.CHANNEL_ID}&maxResults=10&order=date&type=video&key=${process.env.YOUTUBE_API_KEY}`

// get the latest video from the channel
const getLatestVideos = async () => {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  return data.items
}

module.exports = async (req, res) => {
  try {
    const video = await getLatestVideos()
    res.status(200).json(video)
  } catch (error) {
    res.status(500).json({ error })
  }
  return
}
