import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const ChatInterface = () => {
  const [category, setCategory] = useState("frontend");
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  // const englishOnlyRegex = /^[a-zA-Z0-9\s.,!?'"-]*$/;

  const fetchQuestions = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_URL}/api/questions/${category}`);
      setQuestions(response.data);
      setCurrentQuestionIndex(0);
      setUserAnswer("");
      setFeedback("");
      setChatHistory([]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching questions:", error);
      setQuestions([]);
      setIsLoading(false);
    }
  };

  const submitAnswer = async () => {
    if (!userAnswer.trim()) {
      alert("Please provide an answer before submitting.");
      return;
    }

    try {
      const currentQuestion = questions[currentQuestionIndex];
      const response = await axios.post(
        `${API_URL}/api/questions/evaluate`,
        {
          category,
          questionId: currentQuestion._id,
          userAnswer,
        }
      );

      const feedbackReceived = response.data.feedback;
      setFeedback(feedbackReceived);

      // Save current interaction in chat history
      setChatHistory((prevHistory) => [
        ...prevHistory,
        {
          question: currentQuestion.questionText,
          answer: userAnswer,
          feedback: feedbackReceived,
        },
      ]);

      setUserAnswer(""); // Clear user input
    } catch (error) {
      console.error("Error submitting answer:", error);
      alert("Failed to submit answer. Please try again.");
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setFeedback(""); // Clear feedback for the next question
    } else {
      alert("You have completed all questions in this category!");
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [category]);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, feedback]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-500">
    <div className="w-full max-w-2xl bg-white shadow-xl rounded-lg flex flex-col h-screen md:h-[85vh] overflow-hidden">
      {/* Header */}
      <div className="p-4 md:p-6 border-b bg-gradient-to-r from-blue-600 to-purple-600 flex justify-between items-center">
        <h1 className="text-lg md:text-2xl font-bold text-white">Mock Interview Chatbot</h1>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="text-sm border rounded-lg p-2 bg-white focus:ring-2 focus:ring-blue-300"
        >
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
          <option value="DSA">DSA</option>
          <option value="hr">HR</option>
        </select>
      </div>
  
      {/* Chat History */}
      <div className="flex-1 p-4 md:p-6 overflow-y-auto bg-gray-50">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {chatHistory.map((chat, index) => (
              <div key={index} className="space-y-4">
                <div className="flex justify-start">
                  <div className="bg-white p-3 md:p-4 rounded-xl shadow-md max-w-[80%]">
                    <p className="text-xs md:text-sm font-medium text-gray-600">Interviewer:</p>
                    <p className="text-gray-800">{chat.question}</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-blue-500 p-3 md:p-4 rounded-xl shadow-md max-w-[80%]">
                    <p className="text-xs md:text-sm font-medium text-white">You:</p>
                    <p className="text-white">{chat.answer}</p>
                  </div>
                </div>
                <div className="flex justify-start pb-4">
                  <div className="bg-white p-3 md:p-4 rounded-xl shadow-md max-w-[80%]">
                    <p className="text-xs md:text-sm font-medium text-gray-600">Feedback:</p>
                    <p className="text-gray-800">{chat.feedback}</p>
                  </div>
                </div>
              </div>
            ))}
  
            {questions.length > 0 && feedback === "" && (
              <div className="flex justify-start">
                <div className="bg-white p-3 md:p-4 rounded-xl shadow-md max-w-[80%]">
                  <p className="text-xs md:text-sm font-medium text-gray-600">Interviewer:</p>
                  <p className="text-gray-800">{questions[currentQuestionIndex].questionText}</p>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </>
        )}
      </div>
  
      {/* Input Area */}
      <div className="border-t p-4 bg-white fixed bottom-0 w-full md:relative md:w-auto">
        <div className="flex items-center w-full">
          <textarea
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submitAnswer();
              }
            }}
            placeholder="Type your answer..."
            className="border rounded-xl p-3 focus:ring-2 focus:ring-blue-300 resize-none transition-all duration-200 w-full"
            rows={2}
          />
          <div className="hidden md:flex space-x-2">
            <button
              onClick={submitAnswer}
              className="bg-blue-500 text-white px-6 py-3 ml-2 rounded-xl shadow-md hover:bg-blue-600 transition-all duration-200"
            >
              Submit
            </button>
            <button
              onClick={handleNextQuestion}
              className={`px-6 py-3 rounded-xl shadow-md transition-all duration-200 ${
                feedback ? "bg-blue-500 text-white ring-4 ring-blue-300 animate-pulse" : "bg-gray-500 text-white"
              }`}
            >
              Next
            </button>
          </div>
  
          {/* Mobile Buttons */}
          <div className="flex md:hidden space-x-2 w-full">
            <button
              onClick={submitAnswer}
              className="bg-blue-500 ml-2 text-white flex-1 py-3 rounded-xl shadow-md hover:bg-blue-600 transition-all duration-200"
            >
              ↵
            </button>
            <button
              onClick={handleNextQuestion}
              className={`flex-1 py-3 rounded-xl shadow-md transition-all duration-200 ${
                feedback ? "bg-blue-500 text-white ring-4 ring-blue-300 animate-pulse" : "bg-gray-500 text-white"
              }`}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default ChatInterface;