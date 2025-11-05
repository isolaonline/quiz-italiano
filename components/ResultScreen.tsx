import React from 'react';
import { Evaluation } from '../types';
import {
  IconTrophy,
  IconSparkles,
  IconBrain,
  IconBookOpen,
  IconLightbulb,
  IconRotateCcw
} from './icons';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;

  const getEvaluation = (): Evaluation => {
    if (percentage >= 90) {
      return {
        title: "Eccellente! 🏆",
        message: "Complimenti! Conosci la materia alla perfezione. La tua preparazione è impeccabile! Continua così!",
        icon: <IconTrophy className="w-20 h-20 text-yellow-300 mx-auto mb-4 animate-bounce" />
      };
    }
    if (percentage >= 75) {
      return {
        title: "Fantastico! 🎉",
        message: "Ottima preparazione! Hai una conoscenza solida e approfondita. Manca pochissimo alla perfezione!",
        icon: <IconSparkles className="w-20 h-20 text-cyan-300 mx-auto mb-4" />
      };
    }
    if (percentage >= 60) {
      return {
        title: "Bravo! 👏",
        message: "Buon lavoro! Hai dimostrato una buona comprensione. Con un altro po' di ripasso sugli argomenti che hai sbagliato sarai imbattibile!",
        icon: <IconBrain className="w-20 h-20 text-blue-300 mx-auto mb-4" />
      };
    }
    if (percentage >= 40) {
        return {
          title: "Buon inizio! 📚",
          message: "La base c'è! Hai capito alcuni concetti chiave. Riguarda le spiegazioni e concentrati sui tuoi errori per costruire una conoscenza più solida!",
          icon: <IconBookOpen className="w-20 h-20 text-indigo-400 mx-auto mb-4" />
        };
      }
    return {
      title: "Ritenta! 💪",
      message: "Non scoraggiarti! Ogni tentativo ti rende più forte. Ripassa gli argomenti e riprova per superare la sfida!",
      icon: <IconLightbulb className="w-20 h-20 text-gray-400 mx-auto mb-4" />
    };
  };

  const evaluation = getEvaluation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black p-4 md:p-8 flex items-center justify-center relative overflow-hidden font-sans">
      <div className="bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-2xl shadow-black/30 p-8 max-w-lg w-full text-center relative z-10 border border-slate-700">
        <div className="relative mb-6">
          {evaluation.icon}
        </div>
        
        <h2 className="text-3xl font-black text-white mb-6 drop-shadow-lg">
          {evaluation.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-700/50 rounded-lg p-6 text-white border border-slate-600">
            <div className="text-4xl font-black mb-2">{score} / {totalQuestions}</div>
            <div className="text-sm font-medium text-slate-300">Risposte Corrette</div>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-6 text-white border border-slate-600">
            <div className="text-4xl font-black mb-2">{percentage.toFixed(0)}%</div>
            <div className="text-sm font-medium text-slate-300">Precisione</div>
          </div>
        </div>

        <div className="bg-slate-900/50 rounded-lg p-6 mb-8 border border-slate-700 text-left">
          <h3 className="text-xl font-bold text-white mb-2">Valutazione e Insegnamento:</h3>
          <p className="text-slate-300 text-base leading-relaxed">
            {evaluation.message}
          </p>
        </div>

        <button
          onClick={onRestart}
          className="w-full bg-slate-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-slate-600 transition-all transform hover:scale-105 flex items-center justify-center gap-3"
        >
          <IconRotateCcw className="w-6 h-6" />
          Nuova Sfida
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;