import React, { useRef, useState } from 'react';

const FuturisticVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="futuristic-video-section">
      <div className="container">
        <div className="video-container-wrapper">
          {/* Floating Elements */}
          <div className="floating-elements">
            <div className="float-element element-1">
              <i className="fas fa-play"></i>
            </div>
            <div className="float-element element-2">
              <i className="fas fa-video"></i>
            </div>
            <div className="float-element element-3">
              <i className="fas fa-film"></i>
            </div>
          </div>

          {/* Main Video Container */}
          <div 
            className={`video-frame ${isHovered ? 'hovered' : ''} ${isPlaying ? 'playing' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* 3D Border Effect */}
            <div className="video-border-3d">
              <div className="border-corner corner-tl"></div>
              <div className="border-corner corner-tr"></div>
              <div className="border-corner corner-bl"></div>
              <div className="border-corner corner-br"></div>
            </div>

            {/* Video Element */}
            <div className="video-wrapper">
              <video
                ref={videoRef}
                className="video-element"
                loop
                muted
                playsInline
              >
                <source src="/dream.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay Gradient */}
              <div className="video-overlay"></div>

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div className="play-button-overlay" onClick={handlePlayPause}>
                  <div className="play-button-circle">
                    <div className="play-button-inner">
                      <i className="fas fa-play"></i>
                    </div>
                    <div className="play-button-ring"></div>
                    <div className="play-button-ring ring-2"></div>
                  </div>
                  <p className="play-text">Click to Experience Kerala</p>
                </div>
              )}

              {/* Video Controls */}
              {isPlaying && (
                <div className="video-controls">
                  <button className="control-btn pause-btn" onClick={handlePlayPause}>
                    <i className="fas fa-pause"></i>
                  </button>
                </div>
              )}
            </div>

            {/* Info Cards */}
            <div className="video-info-cards">
              <div className="info-card card-1">
                <div className="card-icon">
                  <i className="fas fa-water"></i>
                </div>
                <div className="card-content">
                  <h4>Backwaters</h4>
                  <p>Serene Beauty</p>
                </div>
              </div>
              <div className="info-card card-2">
                <div className="card-icon">
                  <i className="fas fa-mountain"></i>
                </div>
                <div className="card-content">
                  <h4>Hill Stations</h4>
                  <p>Misty Mountains</p>
                </div>
              </div>
              <div className="info-card card-3">
                <div className="card-icon">
                  <i className="fas fa-umbrella-beach"></i>
                </div>
                <div className="card-content">
                  <h4>Beaches</h4>
                  <p>Golden Shores</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="video-info-bar">
            <div className="info-item">
              <i className="fas fa-eye"></i>
              <span>Watch Kerala Come Alive</span>
            </div>
            <div className="info-divider"></div>
            <div className="info-item">
              <i className="fas fa-clock"></i>
              <span>2 Min Journey</span>
            </div>
            <div className="info-divider"></div>
            <div className="info-item">
              <i className="fas fa-heart"></i>
              <span>Experience Paradise</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturisticVideo;
