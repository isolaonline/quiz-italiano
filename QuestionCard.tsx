import React from 'react';
import { GameQuestion } from '../types';
import { categoryIcons, difficultyConfig } from '../constants';
import { IconBrain, IconCheckCircle, IconLightbulb, IconSparkles, IconTrophy, IconXCircle, IconZap } from './IconComponents';

interface QuestionCardProps {
    question: GameQuestion;
    onAnswer: (index: number) => void;
    nextQuestion: () => void;
    currentQuestion: number;
    gameLength: number;
    score: number;
    streak: number;
    selectedAnswer: number | null;
    showResult: boolean;
    handleLifeline: () => void;
    lifelineUsed: boolean;
    lifelineActive: boolean;
    hiddenOptions: number[];
}


const QuestionCard: React.FC<QuestionCardProps> = ({
    question,
    onAnswer,
    nextQuestion,
    currentQuestion,
    gameLength,
    score,
    streak,
    selectedAnswer,
    showResult,
    handleLifeline,
    lifelineUsed,
    lifelineActive,
    hiddenOptions,
}) => {
    
  const category = question.category || "Grammatica";
  const CategoryIcon = categoryIcons[category] || <IconBrain className="w-8 h-8 text-blue-400" />;
  const difficulty = question.difficulty;
  const diffConfig = difficultyConfig[difficulty];


  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black p-4 md:p-8 relative overflow-hidden font-sans text-slate-100 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto relative z-10">
        <div className="bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-2xl shadow-black/30 p-6 md:p-10 border border-slate-700">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-3 bg-slate-700/50 rounded-full px-5 py-2 border border-slate-600">
              {React.cloneElement(CategoryIcon, { className: "w-6 h-6 text-blue-300" })}
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Domanda {currentQuestion + 1}/{gameLength}
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-sm text-blue-300 font-semibold">{category}</div>
                    <div className={`px-2 py-0.5 rounded-full text-xs font-bold border ${diffConfig.bgColor} ${diffConfig.borderColor} ${diffConfig.color}`}>
                        {difficulty}
                    </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={handleLifeline}
                disabled={lifelineUsed || showResult}
                className={`flex items-center gap-2 bg-slate-700/50 text-cyan-300 px-4 py-3 rounded-full border border-slate-600 font-semibold transition-all
                  ${lifelineUsed ? 'opacity-40 cursor-not-allowed' : 'hover:bg-slate-700 hover:border-cyan-400'}
                  ${showResult ? 'opacity-40' : ''}
                `}
              >
                <IconSparkles className="w-5 h-5" />
                <span>50/50</span>
              </button>
            
              {streak >= 3 && (
                <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-3 rounded-full animate-pulse shadow-lg shadow-red-500/20">
                  <IconZap className="w-5 h-5" />
                  <span className="font-bold">{streak} 🔥</span>
                </div>
              )}
              <div className="flex items-center gap-2 bg-slate-700/50 text-white px-6 py-3 rounded-full border border-slate-600">
                <IconTrophy className="w-6 h-6 text-cyan-300" />
                <span className="font-black text-xl">{score}</span>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative w-full h-2 bg-slate-700 rounded-full mb-8 overflow-hidden">
            <div 
              className="absolute h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / gameLength) * 100}%` }}
            >
            </div>
          </div>

          {/* Domanda */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              {question.question}
            </h2>
          </div>

          {/* Opzioni */}
          <div className="grid gap-5 mb-8">
            {question.options.map((option: string, index: number) => {
              const isCorrect = index === question.correct;
              const isSelected = index === selectedAnswer;
              
              if (lifelineActive && hiddenOptions.includes(index)) {
                return null;
              }
              
              let btnClass = "relative w-full text-left p-5 rounded-lg font-medium text-lg transition-all ease-in-out duration-200 ";
              
              if (!showResult) {
                btnClass += "bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:border-slate-600";
              } else {
                if (isCorrect) {
                  btnClass += "bg-green-900/30 border-green-500 text-white ring-2 ring-green-500";
                } else if (isSelected) {
                  btnClass += "bg-red-900/30 border-red-500 text-white ring-2 ring-red-500";
                } else {
                  btnClass += "bg-slate-800 border-slate-700 text-slate-500 opacity-60";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => onAnswer(index)}
                  className={btnClass}
                  disabled={showResult}
                >
                  <div className="flex items-center justify-between">
                    <span className="pr-4">{option}</span>
                    {showResult && isCorrect && (
                      <IconCheckCircle className="w-7 h-7 flex-shrink-0 text-green-400" />
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <IconXCircle className="w-7 h-7 flex-shrink-0 text-red-400" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* --- SPIEGAZIONE / INSEGNAMENTO --- */}
          {showResult && (
            <div className={`p-6 rounded-lg mb-6 border-l-4 shadow-lg transition-all duration-300 ${
              selectedAnswer === question.correct 
                ? 'bg-slate-900/50 border-green-500' 
                : 'bg-slate-900/50 border-red-500'
            }`}>
              <p className="font-bold text-lg mb-2 flex items-center gap-2">
                <IconLightbulb className={`w-6 h-6 ${selectedAnswer === question.correct ? 'text-green-400' : 'text-red-400'}`}/> 
                {selectedAnswer === question.correct ? 'Risposta Corretta! (Spiegazione)' : 'Impara dall\'errore! (Spiegazione)'}
              </p>
              <p className="text-slate-300 text-base leading-relaxed">{question.explanation}</p>
            </div>
          )}

          {/* Pulsante Avanti */}
          {showResult && (
            <button
              onClick={nextQuestion}
              className="w-full bg-slate-700 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-slate-600 transition-all transform hover:scale-105 active:scale-95"
            >
              {currentQuestion < gameLength - 1 ? '➜ Prossima Domanda' : '🏆 Vedi Risultati Finali'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default QuestionCard;
