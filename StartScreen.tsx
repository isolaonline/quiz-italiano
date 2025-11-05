import React, { useState } from 'react';
import { Difficulty } from '../types';
import { IconGraduationCap, IconSparkles } from './IconComponents';

interface StartScreenProps {
  onStart: (difficulty: Difficulty | 'Tutte') => void;
}

const difficulties: (Difficulty | 'Tutte')[] = ['Facile', 'Medio', 'Difficile', 'Tutte'];

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'Tutte'>('Tutte');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black p-4 md:p-8 flex items-center justify-center font-sans">
      <div className="bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-2xl shadow-black/30 p-8 max-w-lg w-full text-center border border-slate-700">
        <IconGraduationCap className="w-20 h-20 text-blue-400 mx-auto mb-4" />
        <h1 className="text-4xl font-black text-white mb-2 drop-shadow-lg">Quiz Italiano</h1>
        <p className="text-slate-300 text-lg mb-8">Metti alla prova la tua conoscenza della lingua e cultura italiana.</p>
        
        <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Scegli la difficoltà</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {difficulties.map(diff => (
                    <button
                        key={diff}
                        onClick={() => setSelectedDifficulty(diff)}
                        className={`p-4 rounded-lg font-bold transition-all transform hover:scale-105 ${
                            selectedDifficulty === diff 
                            ? 'bg-blue-600 text-white shadow-lg ring-2 ring-blue-400' 
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                        }`}
                    >
                        {diff}
                    </button>
                ))}
            </div>
        </div>

        <button
          onClick={() => onStart(selectedDifficulty)}
          className="w-full bg-slate-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-slate-600 transition-all transform hover:scale-105 flex items-center justify-center gap-3"
        >
          <IconSparkles className="w-6 h-6" />
          Inizia la sfida
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
