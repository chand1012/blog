import React from 'react'

const Footer = () => {

    const social = {
        twitter: `Chand1012Dev`,
        instagram: 'chand1012',
        youtube: 'channel/UCRKeF9dxhScFwB4VyOqxkhQ',
        github: 'chand1012',
        twitch: 'chand1012',
        devTo: 'chand1012'
      }

    const youtube = () => {
        if (social?.youtube) {
            return (
                <a href={"https://www.youtube.com/" + social.youtube}>
                    <img alt="YouTube" style={{marginRight: 5}} height="40" width="40" src="https://camo.githubusercontent.com/d54e97f5edde790381f7e62b217410df33e066a0dc8f692f2fc6b25fc1768b0c/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f796f75747562652e737667"/>
                </a>
            )
        }

        return null
    }

    const github = () => {
        if (social?.github) {
            return (
                <a href={"https://github.com/" + social.github}>
                    <img alt="GitHub" style={{marginRight: 5}} height="40" width="40" src="https://camo.githubusercontent.com/b079fe922f00c4b86f1b724fbc2e8141c468794ce8adbc9b7456e5e1ad09c622/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6769746875622e737667" />
                </a>
            )
        }
        
        return null
    }

    const devTo = () => {
        if (social?.devTo) {
            return (
                <a href={"https://dev.to/" + social.devTo}>
                    <img alt="Dev.to" style={{marginRight: 5}} src="https://camo.githubusercontent.com/5db862b15e660451b524382c77f60cbd49f176f9/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6465765f746f2e737667" height="40" width="40"/>
                </a>
            )
        }

        return null
    }

    const twitch = () => {
        if (social?.twitch) {
            return (
                <a href={"https://twitch.tv/" + social.twitch}>
                    <img alt="Twitch" style={{marginRight: 5}} src="https://camo.githubusercontent.com/c5942c39052ad962364ea8286a6991f7a9b036bf1d96d20db346d9dfd844dfa4/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f7477697463682e737667" height="40" width="40" />
                </a>
            )
        }

        return null
    }

    const twitter = () => {
        if (social?.twitter) {
            return (
                <a href={"https://twitter.com/" + social.twitter}>
                    <img alt="Twitter" style={{marginRight: 5}} height="40" width="40" src="https://camo.githubusercontent.com/35b0b8bfbd8840f35607fb56ad0a139047fd5d6e09ceb060c5c6f0a5abd1044c/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f747769747465722e737667" />
                </a>
            )
        }
    }

    const instagram = () => {
        if (social?.instagram) {
            return (
                <a href={"https://instagram.com/" + social.instagram}>
                    <img alt="Instagram" style={{marginRight: 5}} height="40" width="40" src="https://camo.githubusercontent.com/c9dacf0f25a1489fdbc6c0d2b41cda58b77fa210a13a886d6f99e027adfbd358/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f696e7374616772616d2e737667" />
                </a>
            )
        }

        return null
    }

    return (
        <footer>
            <div id="copyright">
                © {new Date().getFullYear()} Chandler Lofland
            </div>
            <div id="social">
                {github()}
                {youtube()}
                {twitch()}
                {devTo()}
                {twitter()}
                {instagram()}
                <iframe src="https://github.com/sponsors/chand1012/button" title="Sponsor chand1012" height="35" width="107" style={{border: 0, marginRight: 5}}></iframe>
            </div>
        </footer>
    )
}

export default Footer;