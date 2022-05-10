import React from 'react';
import styled from "styled-components";

const LinkWrapper = styled.a`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }
  
  &:hover {
    color: ${props => props.title ? '#566B5C' : ''};
  }
`;

const Link = ({title, url, isTitle}) => (
    <LinkWrapper title={isTitle} href={url}>
        {title}
    </LinkWrapper>
);

export default Link;