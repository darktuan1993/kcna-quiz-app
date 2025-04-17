import React, { useState } from "react";
import QuizStart from "./components/QuizStart";
import QuizApp from "./components/KcnaQuizApp";
import { questions } from "./components/quizData";

function App() {
  const [start, setStart] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const handleStart = (count) => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const picked = shuffled.slice(0, count);
    setSelectedQuestions(picked);
    setStart(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {!start ? (
        <QuizStart onStart={handleStart} />
      ) : (
        <QuizApp questions={selectedQuestions} />
      )}
    </div>
  );
}

export default App;
