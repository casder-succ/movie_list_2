import React from 'react';
import styled from "styled-components";

const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  font-size: 20px;
  border: 1px solid gray;
  border-radius: 15px;
  text-align: center;
  
  & > img {
    width: 200px;
    border-bottom: 1px solid gray;
    border-radius: 15px;

  }
`;

const Movie = ({title, rating, genres, length, poster}) => {
    return (
        <MovieWrapper>
            <img src={poster} alt="aaa"/>
            <h3>{title}</h3>
            <div>{rating}</div>
            <div>{length}</div>
        </MovieWrapper>
    );
};

export default Movie;