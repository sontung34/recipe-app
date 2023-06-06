import React from 'react'
import YouTube from 'react-youtube';

function Youtube({videoID}) {
    const opts = {
        height: '315',
        width: '560',
        playerVars: {
          autoplay: 1,
        },
      };
  return (
    <YouTube videoId={videoID} opts={opts} />
  )
}

export default Youtube
