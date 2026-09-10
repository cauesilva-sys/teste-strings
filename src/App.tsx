import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { UfvLookupSimulator } from './components/UfvLookupSimulator';
import { FormulaGenerator } from './components/FormulaGenerator';
import { UfvMatrixTable } from './components/UfvMatrixTable';
import { TutorialGuide } from './components/TutorialGuide';
import { AiAssistant } from './components/AiAssistant';
import { Sun, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'simulator' | 'formulas' | 'matrix' | 'tutorial'>('simulator');

  useEffect(() => {
    document.title = 'Consulta de Strings';
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col font-sans">
      {/* Top Bar Header Hidden per user request */}
      {/* <Header activeTab={activeTab} setActiveTab={setActiveTab} /> */}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Render Tab Content */}
        {activeTab === 'simulator' && (
          <UfvLookupSimulator onGoToFormulas={() => setActiveTab('formulas')} />
        )}

        {activeTab === 'formulas' && <FormulaGenerator />}

        {activeTab === 'matrix' && (
          <UfvMatrixTable
            onSelectCell={(_ufvId, _inverterIndex) => {
              setActiveTab('simulator');
            }}
          />
        )}

        {activeTab === 'tutorial' && <TutorialGuide />}
      </main>
    </div>
  );
}
