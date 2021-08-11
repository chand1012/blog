import TwitchApi from 'node-twitch';

const about = async (req, res) => {
    // create twitch client
    const twitch = new TwitchApi({
        client_id: process.env.TWITCH_CLIENT_ID,
        client_secret: process.env.TWITCH_CLIENT_SECRET,
    });

    // get stream info
    const stream = await twitch.getStreams({ channel: "chand1012" });

    const { data } = stream;
    //send response
    res.send(data[0] || {});
};

export default about;