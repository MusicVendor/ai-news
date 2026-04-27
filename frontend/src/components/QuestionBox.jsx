function QuestionBox({ question, setQuestion, onAsk, answer }) {
  return (
    <div className="mt-10">
      <input
        className="w-full bg-gray-900 border border-gray-700 p-2 rounded-lg mb-3 focus:outline-none"
        placeholder="Ask AI about the news..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        onClick={onAsk}
        className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg"
      >
        Ask AI
      </button>

      {answer && (
        <div className="mt-3 bg-gray-900/60 border border-gray-800 p-4 rounded-xl shadow whitespace-pre-line text-gray-200">
          {answer}
        </div>
      )}
    </div>
  );
}

export default QuestionBox;