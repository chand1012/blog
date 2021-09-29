import * as React from "react"

import ReactPlayer from "react-player"

const BASE_URL = "https://www.youtube.com/embed/"

const Viewer = ({ videoId }) => {
  return (
    <ReactPlayer
      url={BASE_URL + videoId}
      controls
      style={{
        marginBottom: "1rem",
      }}
    />
  )
}

export default Viewer
