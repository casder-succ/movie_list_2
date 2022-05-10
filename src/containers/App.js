import React from "react";
import {createGlobalStyle} from "styled-components";
import MovieList from "./MovieList";
import Header from "../components/Header/Header";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

function App() {
    return (
        <>
            <GlobalStyles/>
            <Header/>
            <MovieList
                dataSource={'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1'}
            />
        </>
    );
}

export default App;
