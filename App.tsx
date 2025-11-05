import React, { useState, useEffect, useCallback } from 'react';
import { allQuestions } from './data/questions.ts';
import type { Question } from './types';
import LoadingScreen from './components/LoadingScreen';
import ResultScreen from './components/ResultScreen';
import QuizScreen from './components/QuizScreen';

const GAME_LENGTH = 20;
const RECENCY_LIMIT = 60; // 3 games * 20 questions

const App: React.FC = () => {
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);
  const [recentQuestionIds, setRecentQuestionIds] = useState<Set<number>>(new Set());
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  
  const startNewGame = useCallback(() => {
    // 1. Filter out recently used questions
    const availableQuestions = allQuestions.filter(q => !recentQuestionIds.has(q.id));
    
    // 2. If we don't have enough "fresh" questions, fall back to the full list
    let questionsToUse = availableQuestions.length >= GAME_LENGTH ? availableQuestions : allQuestions;
    
    // 3. Shuffle and select questions for the new game
    const shuffled = [...questionsToUse].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, GAME_LENGTH);
    
    // 4. Update the set of recent questions
    setRecentQuestionIds(prevIds => {
      const newIds = new Set(prevIds);
      selectedQuestions.forEach(q => newIds.add(q.id));
      
      // 5. Prune the oldest question IDs if the set gets too large
      if (newIds.size > RECENCY_LIMIT) {
        const idsArray = Array.from(newIds);
        const toRemove = idsArray.slice(0, newIds.size - RECENCY_LIMIT);
        toRemove.forEach(id => newIds.delete(id));
      }
      return newIds;
    });

    // 6. Reset game state
    setGameQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setStreak(0);
    setGameFinished(false);
  }, [recentQuestionIds]);

  useEffect(() => {
    // Start the first game on component mount
    startNewGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
      setStreak(prevStreak => prevStreak + 1);
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < GAME_LENGTH - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setGameFinished(true);
    }
  };

  // Show loading screen while questions are being prepared
  if (gameQuestions.length === 0) {
    return <LoadingScreen />;
  }

  // Show result screen when the game is finished
  if (gameFinished) {
    return <ResultScreen score={score} totalQuestions={GAME_LENGTH} onRestart={startNewGame} />;
  }
  
  const currentQuestion = gameQuestions[currentQuestionIndex];

  // Show the main quiz screen
  return (
    <QuizScreen
      question={currentQuestion}
      onAnswer={handleAnswer}
      nextQuestion={nextQuestion}
      currentQuestionIndex={currentQuestionIndex}
      totalQuestions={GAME_LENGTH}
      score={score}
      streak={streak}
    />
  );
};

export default App;