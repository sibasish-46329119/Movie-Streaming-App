import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import axios from "axios";
import MovieCard from "./MovieCard";

const StyledVideoCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(1);
  transition: filter 0.3s ease;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const DimOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const BottomDimOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 100%);
`;

const VideoControls = styled.div`
  position: absolute;
  bottom: 8.125rem;
  right: 7.5rem;
`;

const MuteButton = styled.button`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;

const Carousel = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [muted, setMuted] = useState(true);

  // Reference to the video element
  const videoRef = useRef();

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8011/videoData/getAllVideos"
        );
        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchData();
  }, []);

  // Auto-update the current video every 15 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 15000);

    return () => clearInterval(intervalId);
  }, [videos]);

  const toggleMute = () => {
    setMuted(!muted);
  };

  // Handle video pause on scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalPageHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / totalPageHeight;

      // If scrolled more than 50% down the page, pause the video
      if (scrollPercentage >= 0.5) {
        videoRef.current.pause();
      } else {
        // If scrolled less than 50% down the page, play the video (optional)
        videoRef.current.play();
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if there are any videos to display
  if (videos.length === 0) {
    return <div>Loading videos...</div>;
  }

  return (
    <StyledVideoCarousel>
      <VideoContainer>
        <Video
          ref={videoRef} // Attach the ref to the Video element
          autoPlay
          muted={muted}
          controls={false}
          controlsList="nodownload nofullscreen"
          src={`http://localhost:8011/videoData/post/video/${videos[currentVideoIndex].videoName}`}
          type="video/mp4"
        />
        <DimOverlay />
        <BottomDimOverlay />
      </VideoContainer>
      <MovieCard movie={videos[currentVideoIndex]} />{" "}
      {/* Pass current video data to MovieCard */}
      <VideoControls>
        <MuteButton onClick={toggleMute}>
          {muted ? <FaVolumeMute /> : <FaVolumeUp />}
        </MuteButton>
      </VideoControls>
    </StyledVideoCarousel>
  );
};

export default Carousel;
