import axios from "axios";
import { key, baseUrl } from "./global";

const api = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: key,
    language: "en-US",
  },
});

export const getPopularMovies = async () => await api("/popular");

export const getUpcomingMovies = async () => await api("/upcoming");

export const getTopRatedMovies = async () => await api("/top_rated");
