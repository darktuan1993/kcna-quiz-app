import React, { useState, useEffect } from "react";

// Hàm trộn ngẫu nhiên mảng (xáo trộn câu trả lời)
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function QuizApp({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]); // State để lưu câu hỏi đã xáo trộn

  // Chỉ xáo trộn câu trả lời khi trang được tải (hoặc khi bắt đầu bài thi)
  useEffect(() => {
    if (questions && questions.length > 0) {
      const shuffled = questions.map((question) => ({
        ...question,
        answer_options: shuffleArray(question.answer_options),
      }));
      setShuffledQuestions(shuffled);
    }
  }, [questions]);

  const handleAnswerSubmit = () => {
    const current = shuffledQuestions[currentQuestion];
    const isCorrect = current.correct_answers.includes(selectedAnswer);
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer("");
    } else {
      setShowResult(true); // Khi hết câu hỏi, hiển thị kết quả
    }
  };

  // Thêm hàm quay lại
  const handleGoBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(""); // Đặt lại câu trả lời đã chọn khi quay lại
    }
  };

  // Kiểm tra nếu không có câu hỏi nào
  if (shuffledQuestions.length === 0) {
    return <div>Loading questions...</div>;
  }

  const current = shuffledQuestions[currentQuestion];

  // Nếu đã làm hết bài, hiển thị kết quả
  if (showResult) {
    return (
      <div className="container text-center d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="bg-white p-4 rounded shadow-lg" style={{ maxWidth: '600px', width: '100%' }}>
          <h2 className="text-xl font-semibold mb-4">Kết quả của bạn</h2>
          <p className="text-lg">Bạn đã trả lời đúng {score} / {shuffledQuestions.length} câu hỏi.</p>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-primary mt-4"
          >
            Làm lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="bg-white p-4 rounded shadow-lg" style={{ maxWidth: '600px', width: '100%' }}>
        <h4 className="text-lg font-semibold mb-4">Câu {currentQuestion + 1}:</h4>
        <p className="mb-4 text-lg">{current.question}</p>
        <div className="mb-4">
          {current.answer_options.map((option, index) => (
            <div key={index} className="form-check mb-2">
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                className="form-check-input"
              />
              <label className="form-check-label">{option}</label>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-between">
          <button
            onClick={handleGoBack}
            disabled={currentQuestion === 0}
            className="btn btn-secondary"
          >
            Quay lại
          </button>
          <button
            onClick={handleAnswerSubmit}
            disabled={!selectedAnswer}
            className="btn btn-primary"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
