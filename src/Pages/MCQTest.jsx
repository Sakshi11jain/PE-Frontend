import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const MCQTest = () => {
  const { width, height } = useWindowSize();
  const { category } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const navigate = useNavigate();
  const [previousScore, setPreviousScore] = useState(null);
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const savedScore = sessionStorage.getItem(`mcqScore_${category}`);
    if (savedScore) setPreviousScore(parseInt(savedScore, 10)); 
  }, [category]);
  
  useEffect(() => {
    if (isTestCompleted) {
      sessionStorage.setItem(`mcqScore_${category}`, score);
    }
  }, [isTestCompleted, score, category]);  

  useEffect(() => {
    if (isTestCompleted) {
      setTimeout(() => {
        navigate("/mcq", { replace: true });
      }, 5000);
    }
  }, [isTestCompleted, navigate]);

  useEffect(() => {
    window.onpopstate = () => {
      navigate("/home", { replace: true });
    };
    return () => {
      window.onpopstate = null;
    };
  }, [navigate]);

  useEffect(() => {
    const savedScore = sessionStorage.getItem('mcqScore');
    if (savedScore) setScore(parseInt(savedScore, 10));
  }, []);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`${API_URL}/api/mcq`);
        const data = await response.json();
        let categoryQuestions = category === 'aptitude' ? data.aptitude_questions : data.technical_questions;
        if (categoryQuestions?.length) {
          const selectedQuestions = categoryQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
          setQuestions(selectedQuestions);
        }
      } catch (error) {
        console.error('Error loading questions:', error);
      }
    };

    fetchQuestions();
  }, [category]);

  useEffect(() => {
    if (questions.length === 0) return;

    setTimeLeft(60);
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          handleNext();
          return 60;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, questions]);

  const handleAnswerSelect = (option) => {
    setSelectedAnswers((prev) => {
      const updatedAnswers = { ...prev, [currentQuestionIndex]: option };
      let newScore = 0;
  
      Object.keys(updatedAnswers).forEach((index) => {
        if (updatedAnswers[index] === questions[index]?.answer) {
          newScore++;
        }
      });
  
      setScore(newScore);
      sessionStorage.setItem('mcqScore', newScore);
      return updatedAnswers;
    });
  };
    
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      sessionStorage.setItem('mcqScore', score);
      setIsTestCompleted(true);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleExit = () => {
    setShowExitConfirm(true);
  };

  const confirmExit = () => {
    setIsTestCompleted(true);
    setShowExitConfirm(false);
  };

  const attemptedCount = Object.keys(selectedAnswers).length;
  const unattemptedCount = questions.length - attemptedCount;
  const incorrectAnswers = attemptedCount - score;
  const correctAnswers = score;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-br from-blue-200 to-blue-50">
      {isTestCompleted && score >= 7 && <Confetti width={width} height={height} />}
      
      {!isTestCompleted ? (
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl ">
          {/* Question Navigator */}
          <div className="bg-gradient-to-br from-blue-200 to-blue-600 p-4 rounded-xl shadow-lg w-full sm:w-1/3">
            <h3 className="text-lg font-semibold mb-2 text-center">Question Navigator</h3>
            <p className="text-sm mb-2 text-center">✅ Green: Attempted | ⚪ Gray: Unattempted</p>
            <p className="text-sm text-center">Attempted: {attemptedCount} | Unattempted: {unattemptedCount}</p>
            <div className="grid grid-cols-5 gap-2 mt-2">
              {questions.map((q, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 rounded text-sm font-bold transition ${
                    selectedAnswers[index] ? 'bg-green-500 text-white' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentQuestionIndex(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Question Section */}
          <div className="bg-gradient-to-br from-blue-200 to-blue-700 p-6 rounded-xl shadow-lg flex-1 text-center w-full sm:w-2/3">
            {showExitConfirm ? (
              <div>
                <h2 className="text-xl font-bold mb-4">Do you want to exit the test?</h2>
                <button className="bg-red-600 px-6 py-2 rounded-lg hover:bg-red-500 mr-4 text-white" onClick={confirmExit}>Yes</button>
                <button className="bg-green-500 px-6 py-2 rounded-lg hover:bg-green-400 text-white" onClick={() => setShowExitConfirm(false)}>No</button>
              </div>
            ) : (
              questions.length > 0 && (
                <>
                  <p className="text-red-700 font-bold text-lg">⏳ Time Left: {timeLeft}s</p>
                  <h3 className="text-xl font-semibold mb-4">Question {currentQuestionIndex + 1} of {questions.length}</h3>
                  <p className="text-lg mb-6">{questions[currentQuestionIndex]?.question}</p>
                  <div className="flex flex-col gap-4">
                    {questions[currentQuestionIndex]?.options.map((option, index) => (
                      <button
                      key={index}
                      className={`p-3 rounded-lg text-lg transition w-full font-bold text-white ${
                        selectedAnswers[currentQuestionIndex] === option ? 'bg-green-700' : 'bg-slate-600 hover:bg-slate-700'
                      }`}
                      onClick={() => handleAnswerSelect(option)}
                    >
                      {option}
                    </button>
                    
                    ))}
                  </div>
                  <div className="flex justify-center gap-4 mt-6">
                    <button className="bg-slate-600 px-4 py-2 rounded-lg hover:bg-slate-700 text-white" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>Previous</button>
                    <button className="bg-slate-600 px-4 py-2 rounded-lg hover:bg-slate-700 text-white" onClick={handleNext}>
                      {currentQuestionIndex === questions.length - 1 ? 'Finish Test' : 'Next'}
                    </button>
                    <button className="bg-slate-600 px-4 py-2 rounded-lg hover:bg-red-500 text-white" onClick={handleExit}>Exit Test</button>
                  </div>
                </>
              )
            )}
          </div>
        </div>
      ) : (
        <div className="text-center p-6 rounded-3xl mt-12 shadow-lg w-[400px] h-[300px]">
          <h2 className="text-4xl mt-12 font-bold text-green-900">🎉 Test Completed!</h2>
          <br></br>
          <p className="text-lg font-semibold">Total Questions: {questions.length}</p>
          <p className="text-lg font-semibold">Attempted: {attemptedCount}</p>
          <p className="text-lg font-semibold text-green-800">Correct Answers: {correctAnswers}</p>
          <p className="text-lg font-semibold text-red-800">Incorrect Answers: {incorrectAnswers}</p>
          <p className="text-lg font-semibold text-blue-800">Previous Score: {previousScore !== null ? previousScore : "N/A"}</p>
        </div>
      )}
    </div>
  );
};

export default MCQTest;