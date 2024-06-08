import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: black;
  color: #ffffff;
  padding: 20px 0;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterLinks = styled.div``;

const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div``;

const SocialIconLink = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  margin-right: 10px;

  &:hover {
    color: #999999;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <FooterLinks>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
        </FooterLinks>
        <SocialIcons>
          <SocialIconLink href="#">
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink href="#">
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink href="#">
            <FaInstagram />
          </SocialIconLink>
        </SocialIcons>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;
