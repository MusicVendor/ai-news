function NewsCard({ article }) {
  return (
    <div className="bg-gray-900/60 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-800 hover:scale-[1.02] transition">
      <a href={article.url} target="_blank" rel="noreferrer">
        <h2 className="font-semibold mb-2 text-purple-400 hover:underline">
          {article.title}
        </h2>
      </a>
      <p className="text-sm text-gray-300">{article.description}</p>
    </div>
  );
}

export default NewsCard;