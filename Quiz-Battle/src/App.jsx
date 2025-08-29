import React, { useState } from "react";
import { motion } from "framer-motion";

// Question Bank
const questions = [
  {
    question: "What is the correct syntax for React state hook?",
    options: ["useState()", "setState()", "State()", "ReactState()"],
    answer: "useState()",
  },
  {
    question: "Which company developed React?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    answer: "Facebook",
  },
  {
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "Java Simple X",
      "Java Syntax eXtension",
      "JSON Syntax eXtension",
    ],
    answer: "JavaScript XML",
  },
  {
    question: "Which hook is used for side effects?",
    options: ["useEffect", "useState", "useReducer", "useCallback"],
    answer: "useEffect",
  },
  {
    question: "How do you pass props to a component?",
    options: [
      "Through arguments",
      "Through attributes",
      "Through useState",
      "Through useEffect",
    ],
    answer: "Through attributes",
  },
];

export default function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[currentQ].answer) setScore(score + 1);

    if (currentQ + 1 < questions.length) setCurrentQ(currentQ + 1);
    else setShowResult(true);
  };

  if (showResult) {
    return (
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-xl w-full text-center">
        <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-xl mb-4">
          Your Score: {score} / {questions.length}
        </p>
        <p className="text-gray-300">Well done! 🎉</p>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <motion.div
      key={currentQ}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-xl w-full"
    >
      <h2 className="text-2xl font-bold mb-6">{q.question}</h2>
      <div className="grid gap-4">
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(opt)}
            className="bg-blue-600 hover:bg-blue-700 rounded py-2 px-4 transition-colors duration-200"
          >
            {opt}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-300">
        Question {currentQ + 1} / {questions.length}
      </p>
    </motion.div>
  );
}
