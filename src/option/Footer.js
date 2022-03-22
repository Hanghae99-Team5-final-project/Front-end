import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterBlock>
        <div className="footer"></div>
      </FooterBlock>
    </>
  );
};

const FooterBlock = styled.div`
  .footer {
    background-color: grey;
    background-position: center;
    width: 100%;
    height: 300px;
  }
`;
export default Footer;
