import { useState } from "react";
import {
  fetchNewsAPI,
  fetchSummaryAPI,
  askQuestionAPI,
} from "./services/api";

import SearchBar from "./components/SearchBar";
import NewsList from "./components/NewsList";
import SummaryBox from "./components/SummaryBox";
import QuestionBox from "./components/QuestionBox";
import Loader from "./components/Loader";

function App() {
  const [query, setQuery] = useState("");
  const [question, setQuestion] = useState("");
  const [news, setNews] = useState([]);
  const [summary, setSummary] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch news
  const fetchNews = async () => {
    if (!query) return alert("Enter a topic");

    setLoading(true);
    try {
      const res = await fetchNewsAPI({
        q: query,
      });
      setNews(res.data.articles || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  // Summary
  const fetchSummary = async () => {
    if (!query) return alert("Enter a topic");

    setLoading(true);
    try {
      const res = await fetchSummaryAPI({
        q: query,
      });
      setSummary(res.data.summary || "");
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  // Ask question
  const askQuestion = async () => {
    if (!query || !question) return alert("Enter topic + question");

    setLoading(true);
    try {
      const res = await askQuestionAPI({
        q: query,
        question: question,
      });
      setAnswer(res.data.answer || "");
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        AI News App 
      </h1>

      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={fetchNews}
      />

      {loading && <Loader />}

      <NewsList news={news} />

      <SummaryBox summary={summary} onFetch={fetchSummary} />

      <QuestionBox
        question={question}
        setQuestion={setQuestion}
        onAsk={askQuestion}
        answer={answer}
      />
    </div>
  );
}

export default App;