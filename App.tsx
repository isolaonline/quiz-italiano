import React, { useState } from 'react';
import { GameQuestion, QuestionTemplate, GameState, Difficulty } from './types';
import { questionTemplates } from './constants';
import StartScreen from './components/StartScreen';
import QuestionCard from './components/QuestionCard';
import ResultsScreen from './components/ResultsScreen';
import { IconGraduationCap } from './components/IconComponents';

// Funzione per costruire il set di domande finale, mescolando le opzioni.
const buildUniqueQuestions = (templates: QuestionTemplate[]): GameQuestion[] => {
  return templates.map(item => {
    const options = [item.w1, item.c, item.w2].sort(() => Math.random() - 0.5);
    return {
      question: item.q,
      options: options,
      correct: options.indexOf(item.c),
      explanation: item.expl,
      category: item.category,
      difficulty: item.difficulty
    };
  });
};

const ALL_QUESTIONS = buildUniqueQuestions(questionTemplates);
const GAME_LENGTH = 10; // Gioco da 10 domande

const App = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [gameQuestions, setGameQuestions] = useState<GameQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [streak, setStreak] = useState(0);
  
  const [lifelineUsed, setLifelineUsed] = useState(false); 
  const [lifelineActive, setLifelineActive] = useState(false); 
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([]); 

  const startNewGame = (difficulty: Difficulty | 'Tutte') => {
    let filteredQuestions = ALL_QUESTIONS;
    if (difficulty !== 'Tutte') {
        filteredQuestions = ALL_QUESTIONS.filter(q => q.difficulty === difficulty);
    }
    const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
    setGameQuestions(shuffled.slice(0, GAME_LENGTH)); 
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setStreak(0);
    setLifelineUsed(false);
    setLifelineActive(false);
    setHiddenOptions([]);
    setGameState('playing');
  };

  const handleAnswer = (index: number) => {
    if (showResult) return; 
    
    setSelectedAnswer(index);
    setShowResult(true);
    
    if (index === gameQuestions[currentQuestion].correct) {
      setScore(score + 1);
      setStreak(streak + 1); 
    } else {
      setStreak(0); 
    }
  };

  const nextQuestion = () => {
    const gameLength = gameQuestions.length;
    if (currentQuestion < gameLength - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setLifelineActive(false);
      setHiddenOptions([]);
    } else {
      setGameState('finished');
    }
  };

  const playAgain = () => {
    setGameState('start');
  };
  
  const handleLifeline = () => {
    if (lifelineUsed || showResult) return; 

    setLifelineUsed(true);
    setLifelineActive(true);

    const correctIndex = gameQuestions[currentQuestion].correct;
    const incorrectOptions = [0, 1, 2].filter(
      (index) => index !== correctIndex
    );
    incorrectOptions.sort(() => 0.5 - Math.random());
    setHiddenOptions([incorrectOptions[0]]); // Nasconde una opzione errata
  };

  if (gameState === 'start') {
    return <StartScreen onStart={startNewGame} />;
  }

  if (gameState === 'playing' && gameQuestions.length > 0) {
    return <QuestionCard 
        question={gameQuestions[currentQuestion]}
        onAnswer={handleAnswer}
        nextQuestion={nextQuestion}
        currentQuestion={currentQuestion}
        gameLength={gameQuestions.length}
        score={score}
        streak={streak}
        selectedAnswer={selectedAnswer}
        showResult={showResult}
        handleLifeline={handleLifeline}
        lifelineUsed={lifelineUsed}
        lifelineActive={lifelineActive}
        hiddenOptions={hiddenOptions}
    />;
  }

  if (gameState === 'finished') {
    return <ResultsScreen score={score} gameLength={gameQuestions.length} onPlayAgain={playAgain} />
  }

  // Fallback / Loading state
  return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="flex flex-col items-center text-blue-300 text-2xl font-bold animate-pulse">
          <IconGraduationCap className="w-16 h-16 mb-4" />
          Caricamento Interfaccia...
        </div>
      </div>
    );
};

export default App;
