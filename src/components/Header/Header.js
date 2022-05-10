import React from 'react';
import styled from "styled-components";
import Link from "../Link/Link";

const HeaderWrapper = styled.div`
  padding: 2% 10%;
  
  background-color: #1f1f1f;
  
  & > h1 {
    color: white;
    font-size: 2.2rem;
  }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <h1>
                <Link url="/" isTitle={true} title='Casder movie'/>
            </h1>
        </HeaderWrapper>
    );
};

export default Header;