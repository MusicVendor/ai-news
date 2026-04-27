import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export const fetchNewsAPI = (params) =>
  axios.get(`${BASE_URL}/news`, { params });

export const fetchSummaryAPI = (params) =>
  axios.get(`${BASE_URL}/news/summary`, { params });

export const askQuestionAPI = (params) =>
  axios.get(`${BASE_URL}/news/ask`, { params });