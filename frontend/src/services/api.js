import axios from "axios";

const BASE_URL = "https://ai-news-7mw0.onrender.com";

export const fetchNewsAPI = (params) =>
  axios.get(`${BASE_URL}/news`, { params });

export const fetchSummaryAPI = (params) =>
  axios.get(`${BASE_URL}/news/summary`, { params });

export const askQuestionAPI = (params) =>
  axios.get(`${BASE_URL}/news/ask`, { params });
