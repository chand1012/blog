import * as React from "react"

import ReactPlayer from "react-player"
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc"

const Viewer = ({ onClickLeft, onClickRight, url }) => {
  const arrowSize = 40
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
        <VscChevronLeft size={arrowSize} />
      </div>
      <div>
        <ReactPlayer
          url={url}
          controls
          style={{
            marginBottom: "1rem",
          }}
        />
      </div>
      <div style={{ cursor: "pointer" }} onClick={onClickRight}>
        <VscChevronRight size={arrowSize} />
      </div>
    </div>
  )
}

export default Viewer
