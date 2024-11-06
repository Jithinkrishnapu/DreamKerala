import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';

const HoverPlayVideo = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <Container className="w-80 my-5 rounded">
      <video
        ref={videoRef}
        className="w-100 hover-to-play rounded"
        autoPlay
        loop
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <source src="/dream.mp4" type="video/mp4" />
      </video>
    </Container>
  );
};

export default HoverPlayVideo;
