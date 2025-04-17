import React, { useState } from "react";

export default function QuizStart({ onStart }) {
  const [numQuestions, setNumQuestions] = useState(5);
  const MAX_QUESTIONS = 60;

  const handleSubmit = (e) => {
    e.preventDefault();
    const count = Math.min(Math.max(1, parseInt(numQuestions)), MAX_QUESTIONS);
    onStart(count);
  };

  return (
    <div className="container d-flex justify-content-center text-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="p-4" style={{ maxWidth: '600px', width: '100%', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h1 className="text-center mb-4">Câu hỏi luyện tập</h1>
        <h2 className="text-center text-secondary mb-6">
          Kubernetes and Cloud Native Associate (KCNA)
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="form-label mb-2">
            Chọn số câu hỏi cần làm (tối đa {MAX_QUESTIONS} câu):
          </label>
          <input
            type="number"
            min="1"
            max={MAX_QUESTIONS}
            value={numQuestions}
            onChange={(e) => setNumQuestions(e.target.value)}
            className="form-control mb-4 text-center"
            style={{ width: '100px', margin: '0 auto' }}
          />
          <button
            type="submit"
            className="btn btn-primary w-50"
          >
            TEST
          </button>
        </form>

        <div className="mt-4 p-3 bg-light rounded">
          <p className="mb-2">
            Ứng dụng này là bài thi thử chứng chỉ Kubernetes Security (KCNA), gồm
            các câu hỏi trắc nghiệm giúp bạn ôn tập kiến thức về bảo mật trong
            Kubernetes.
          </p>
          <p className="font-weight-bold text-danger">
            Lưu ý: Đây không phải là đề thi thật.
          </p>
        </div>
      </div>
    </div>
  );
}
