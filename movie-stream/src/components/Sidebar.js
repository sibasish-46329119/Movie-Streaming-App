import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FaSearch, FaHome, FaTv, FaFilm } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import logo from "../img/logo.png";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <SidebarWrapper
      expanded={expanded}
      onMouseEnter={toggleExpand}
      onMouseLeave={toggleExpand}
    >
      <Logo />
      <IconContainer href="/search" expanded={expanded}>
        <FaSearch />
        {expanded && <Text visible>Search</Text>}
      </IconContainer>
      <IconContainer href="/home" expanded={expanded}>
        <FaHome />
        {expanded && <Text visible>Home</Text>}
      </IconContainer>
      <IconContainer href="/tv" expanded={expanded}>
        <FaTv />
        {expanded && <Text visible>TV</Text>}
      </IconContainer>
      <IconContainer href="/movie" expanded={expanded}>
        <FaFilm />
        {expanded && <Text visible>Movie</Text>}
      </IconContainer>
      <IconContainer href="/sports" expanded={expanded}>
        <MdSportsCricket />
        {expanded && <Text visible>Sports</Text>}
      </IconContainer>
    </SidebarWrapper>
  );
};
const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 5%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.7),
    transparent
  ); /* Adjust the opacity for the initial state */
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 0.3s;
  overflow: hidden;
  z-index: 1;

  ${({ expanded }) =>
    expanded &&
    css`
      width: 20%;
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 50%,
        rgba(0, 0, 0, 0) 100%
      ); /* Use linear gradient for fading effect */
    `}
`;

const Logo = styled.div`
  padding: 10px;
  font-weight: bold;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 60%;
  height: 60px; /* Adjust height as needed */
`;
const IconContainer = styled.a`
  padding: 2.188rem;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px; /* Add space between icon and text */
  transition: filter 0.3s;

  ${({ expanded }) =>
    expanded &&
    css`
      &:hover {
        filter: brightness(1.5);
      }
    `}
`;

const Text = styled.span`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.3s;
`;

export default Sidebar;
