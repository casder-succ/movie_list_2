import React from 'react';
import styled from "styled-components";
import WithDataFetch from "../WithDataFetch";
import Movie from "../components/Movie/Movie";

const MovieListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;
  padding-top: 20px;
  
  max-width: 80%;
  margin: 0 auto;
`;

const Alert = styled.h2`
  text-align: center;
`;

const MovieList = ({data, loading, error}) => {
    const films = data.films || [];

    return (
        <MovieListWrapper>
            {(loading || error) && <Alert>{loading ? 'Loading...' : error}</Alert>}

            {films.map((movie) => (
                <Movie key={movie.id}
                       title={movie.nameRu}
                       length={movie.filmLength}
                       genres={movie.genres}
                       rating={movie.rating}
                       poster={movie.posterUrl}
                />)
            )}
        </MovieListWrapper>
    );
};

export default WithDataFetch(MovieList);