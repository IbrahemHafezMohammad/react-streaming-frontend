import React, { useRef, useEffect } from "react";

const VideoPlayer = ({ videoId }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.removeAttribute('src')
        videoRef.current.load()
        console.log('here')
    }
  }, []);
  return (
    <div>
      <video ref={videoRef} width="320" height="240" controls autoPlay>
        <source src={`http://localhost:5000/videos/${videoId}`} type='video/mp4'></source>
        Your Browser Does Not Support the video tag
      </video>
    </div>
  );
};

export default VideoPlayer;
