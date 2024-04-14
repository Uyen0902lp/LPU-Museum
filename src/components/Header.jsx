import React, { useEffect, useRef } from 'react'
import '../pages/Visit/visit.css'
import video from '../assets/video/museum.mp4'
import { Link } from 'react-router-dom'

const Header = () => {
  const videoRef = useRef(); 

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <header className='main__header'>
        <video ref={videoRef} src={video} className='video__ctn' muted autoPlay loop type="video/mp4"></video>
        <div className='welcome-text'>Welcome to LPU Museum</div>
        <Link to='/ticket' className='visit-btn'>Plan Your Visit</Link>
    </header>
  )
}

export default Header;
