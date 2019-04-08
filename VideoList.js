import React from 'react';
import VideoItem from './VideoItem';


const VideoList=({videos})=>{
   const renderedList= videos.map((videos)=>{
       return <VideoItem />;
   }) ;
    
    
    return <div className='ui relaxed divided list'>{renderedList}</div>
};

export default VideoList;