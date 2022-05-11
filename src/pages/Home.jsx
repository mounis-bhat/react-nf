import { Main } from "../components/Main";
import { Row } from "../components/Row";

import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../util/API";

export const Home = () => (
  <>
    <Main />
    <Row title="Popular" fetchFunc={getPopularMovies} queryKey="popular" />
    <Row title="Top Rated" fetchFunc={getTopRatedMovies} queryKey="topRated" />
    <Row title="Upcoming" fetchFunc={getUpcomingMovies} queryKey="upcoming" />
  </>
);
