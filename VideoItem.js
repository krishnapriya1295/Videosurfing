import './VideoItems.css';
import React from 'react';


const VideoItem=({video})=>{
    return (<div className='video-item item'>
        <img alt='hello' className='ui image' src={video.snippet.thumbnails.url.medium}/>
   <div className='content'>
    <div className='header'>{video.snippet.title}</div>
    </div>
    </div>);
};

export default VideoItem;