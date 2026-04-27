import NewsCard from "./NewsCard";

function NewsList({ news }) {
  if (!news.length) {
    return (
      <p className="text-center text-gray-500">
        No news yet. Try searching something 🚀
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {news.map((item, i) => (
        <NewsCard key={i} article={item} />
      ))}
    </div>
  );
}

export default NewsList;