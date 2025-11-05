import React from 'react';
import { IconGraduationCap } from './icons';

const LoadingScreen: React.FC = () => (
  <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
    <div className="flex flex-col items-center text-blue-300 text-2xl font-bold animate-pulse">
      <IconGraduationCap className="w-16 h-16 mb-4" />
      Caricamento Sfida Intellettuale...
    </div>
  </div>
);

export default LoadingScreen;