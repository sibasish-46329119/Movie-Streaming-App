import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  margin-left: 7%;
  overflow: hidden;
  position: relative;
  overflow: hidden;
`;

const Header = styled.h4`
  margin: 10px;
  color: white;
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
`;

const Container = styled.div`
  display: flex;
  overflow-x: hidden; /* Hide the horizontal scrollbar */
  scroll-snap-type: x mandatory;
`;

const Card = styled.div`
  flex: 0 0 auto;
  width: calc(20% - 10px);
  max-width: 240px;
  height: 350px;
  margin-right: 30px;
  border: none;
  border-radius: 8px;
  overflow: hidden;
  scroll-snap-align: start;
  transition: transform 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }

  &:hover > div {
    opacity: 0.5;
  }
`;

const Image = styled.img`
  width: 100%; /* Ensure image takes up the full card width */
  height: 100%; /* Ensure image takes up the full card height */
  object-fit: cover; /* Adjust image size and aspect ratio */
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: grey;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Roboto", sans-serif;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  // height: 300px;
  transform: translateY(-50%);
  background: rgba(128, 128, 128, 0.8);
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #000;
  width: 5%;
  transition: color 0.3s;

  &:hover {
    color: #000;
  }

  ${({ direction }) => (direction === "prev" ? "left: 0;" : "right: 0;")}
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
`;
const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 12px;
  padding: 10px;
  z-index: 1000;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  visibility: visible;
  transition: opacity 1s ease-in-out;
  max-width: 21.8rem;
  max-height: 25rem;
  overflow-y: auto;
  color: white;
  background-color: black;
  opacity: ${({ isModalOpen }) => (isModalOpen ? 1 : 0)};
  visibility: ${({ isModalOpen }) => (isModalOpen ? "visible" : "hidden")};

  /* Set a smaller size for the modal */
`;

const ModalContent = styled.div`
  h2 {
    font-size: 18px; /* Adjust font size */
    margin-bottom: 10px;
  }

  p {
    /* Truncate text with ellipsis if it overflows */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    margin-bottom: 5px;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${({ isModalOpen }) => (isModalOpen ? 1 : 0)};
  visibility: ${({ isModalOpen }) => (isModalOpen ? "visible" : "hidden")};
  transition: opacity 1s ease-in-out;
`;

const CardCarousel = ({ heading, cardData }) => {
  const [activeCard, setActiveCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const handleMouseEnter = (card) => {
    // Set a timeout to open the modal after 2 seconds
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveCard(card);
      setIsModalOpen(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeoutRef.current);
  };

  const handleModalEnter = () => {
    clearTimeout(hoverTimeoutRef.current);
  };

  const handleModalLeave = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!activeCard) {
      setIsModalOpen(false);
    }
  }, [activeCard]);

  return (
    <Wrapper>
      <Header>{heading}</Header>
      <Container ref={containerRef}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            onMouseEnter={() => handleMouseEnter(card)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={`http://localhost:8011/videoData/post/image/${card.imageName}`}
              alt={card.title}
            />
            <Overlay>
              <p>{card.title}</p>
            </Overlay>
          </Card>
        ))}
      </Container>
      <NavButton direction="prev" onClick={() => scroll(-200)}>
        &#10094;
      </NavButton>
      <NavButton direction="next" onClick={() => scroll(200)}>
        &#10095;
      </NavButton>

      {isModalOpen && activeCard && (
        <>
          <ModalBackdrop isModalOpen={isModalOpen} onClick={handleMouseLeave} />
          <Modal
            isModalOpen={isModalOpen}
            onMouseEnter={handleModalEnter}
            onMouseLeave={handleModalLeave}
          >
            <ModalContent>
              <h2>{activeCard.title}</h2>
              <VideoPlayer
                controls
                autoPlay
                controlsList="nodownload nofullscreen"
                onLoadedMetadata={() => console.log("Video Loaded")}
              >
                <source
                  src={`http://localhost:8011/videoData/post/video/${activeCard.videoName}`}
                  type="video/mp4"
                />
              </VideoPlayer>
              <p>{activeCard.description}</p>
              <p>Year of Release: {activeCard.yearRelease}</p>
              <p>Rated: {activeCard.rated}</p>
              <p>Category: {activeCard.category}</p>
              <p>Genres: {activeCard.genre.join(", ")}</p>
            </ModalContent>
          </Modal>
        </>
      )}
    </Wrapper>
  );
};

export default CardCarousel;
