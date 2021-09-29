import * as React from "react"

import ReactPlayer from "react-player"
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc"

const BASE_URL = "https://www.youtube.com/embed/"

const Viewer = ({ videoId, onClickLeft, onClickRight }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ cursor: "pointer" }} onClick={onClickLeft}>
        <VscChevronLeft size={30} />
      </div>
      <div>
        <ReactPlayer
          url={BASE_URL + videoId}
          controls
          style={{
            marginBottom: "1rem",
          }}
        />
      </div>
      <div style={{ cursor: "pointer" }} onClick={onClickRight}>
        <VscChevronRight size={30} />
      </div>
    </div>
  )
}

export default Viewer
