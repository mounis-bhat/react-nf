import axios from "axios";
import { key, baseUrl } from "./global";

const api = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: key,
    language: "en-US",
    page: 1,
  },
});

export const getPopularMovies = async () => await api("movie/popular");

export const getUpcomingMovies = async () => await api("movie/upcoming");

export const getTopRatedMovies = async () => await api("movie/top_rated");
