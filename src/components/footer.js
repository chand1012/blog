import React from "react"

const Footer = () => {
  return (
    <footer>
      <div id="copyright">© {new Date().getFullYear()} Chandler Lofland</div>
      <div id="sponsors">
        <span>My GitHub Sponsors:</span> <br />
        <a href="https://github.com/SvenWritesCode">
          <img
            alt="Sven"
            style={{ marginRight: 8 }}
            src="https://avatars2.githubusercontent.com/u/7458951?s=460&u=f4826fe80efc759290675b6a4694ff4cf2a965fb&v=4"
            height="50"
            width="50"
          />
        </a>
        <a href="https://github.com/RusseII">
          <img
            alt="Russell"
            style={{ marginRight: 8 }}
            src="https://avatars.githubusercontent.com/u/15036618?v=4"
            height="50"
            width="50"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
