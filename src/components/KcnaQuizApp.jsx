import React, { useState, useEffect } from "react";

// Hàm trộn ngẫu nhiên mảng
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function QuizApp({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false);

  useEffect(() => {
    if (questions && questions.length > 0) {
      const shuffled = questions.map((q) => ({
        ...q,
        answer_options: shuffleArray(q.answer_options),
      }));
      setShuffledQuestions(shuffled);
    }
  }, [questions]);

  const handleNextQuestion = () => {
    if (!showAnswerFeedback) {
      const current = shuffledQuestions[currentQuestionIndex];
      const isCorrect = current.correct_answers.includes(selectedAnswer);
      if (isCorrect) setScore(score + 1);
      setShowAnswerFeedback(true);
    } else {
      if (currentQuestionIndex + 1 < shuffledQuestions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer("");
        setShowAnswerFeedback(false);
      } else {
        setShowResult(true);
      }
    }
  };

  const getAnswerClass = (option) => {
    if (!showAnswerFeedback) return "";
    const current = shuffledQuestions[currentQuestionIndex];
    if (current.correct_answers.includes(option)) return "text-success"; // xanh chữ
    if (selectedAnswer === option) return "text-danger"; // đỏ chữ nếu chọn sai
    return "";
  };


  if (shuffledQuestions.length === 0) return <div>Loading questions...</div>;

  if (showResult) {
    return (
      <div className="container text-center d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="bg-white p-4 rounded shadow-lg" style={{ maxWidth: '600px', width: '100%' }}>
          <h2 className="text-xl font-semibold mb-4">Kết quả của bạn</h2>
          <p className="text-lg mb-2">Bạn đã trả lời đúng {score} / {shuffledQuestions.length} câu hỏi.</p>
          {score >= 43 && (
            <p className="text-success fw-bold mb-2">🎉 Bạn đã đạt trên 70%!</p>
          )}
          <button onClick={() => window.location.reload()} className="btn btn-primary mt-4">
            Thử lại
          </button>
        </div>
      </div>

    );
  }

  const current = shuffledQuestions[currentQuestionIndex];

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="bg-white p-4 rounded shadow-lg" style={{ maxWidth: '600px', width: '100%' }}>
        <h3 className="text-lg font-semibold mb-4">Câu {currentQuestionIndex + 1}:</h3>
        <p className="mb-4 text-lg">{current.question}</p>
        <div className="mb-4">
          {current.answer_options.map((option, index) => (
            <div key={index} className={`form-check mb-2 ${getAnswerClass(option)}`}>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                className="form-check-input"
                disabled={showAnswerFeedback}
              />
              <label className="form-check-label">{option}</label>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-end">
          <button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer && !showAnswerFeedback}
            className="btn btn-primary"
          >
            {showAnswerFeedback ? "Tiếp theo" : "Xác nhận"}
          </button>
        </div>
      </div>
    </div>
  );
}
