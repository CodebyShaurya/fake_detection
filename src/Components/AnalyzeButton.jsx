import React from 'react';

const AnalyzeButton = ({ onAnalyze }) => {
  return (
    <div className="text-center mt-4">
      <button 
        onClick={onAnalyze}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Analyze Video
      </button>
    </div>
  );
};

export default AnalyzeButton;
