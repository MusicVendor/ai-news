function SummaryBox({ summary, onFetch }) {
  return (
    <div className="mt-10">
      <button
        onClick={onFetch}
        className="bg-gradient-to-r from-green-400 to-emerald-600 px-4 py-2 rounded-lg mb-3"
      >
        Generate Summary
      </button>

      {summary && (
        <div className="bg-gray-900/60 border border-gray-800 p-4 rounded-xl shadow whitespace-pre-line text-gray-200">
          {summary}
        </div>
      )}
    </div>
  );
}

export default SummaryBox;