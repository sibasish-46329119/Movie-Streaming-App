import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Carousel from "./Carousel";
import CardCarousel from "./CardCarousel";
import Footer from "./Footer";

const Home = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8011/movieData/getAllVideos"
        );
        setCardData(response.data);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Carousel />
      <Sidebar />
      <CardCarousel heading="Recommended Picks" cardData={cardData} />
      <CardCarousel heading="Latest" cardData={cardData} />
      <CardCarousel heading="Top in India" cardData={cardData} />
      <CardCarousel heading="Top Rated" cardData={cardData} />
      <Footer />
    </div>
  );
};

export default Home;
