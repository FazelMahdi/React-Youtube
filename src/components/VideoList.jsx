import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    //props.videos
    // ({videos}) ... dg lazem nist benevisim props.videos

    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>;
    })
    return(
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList;