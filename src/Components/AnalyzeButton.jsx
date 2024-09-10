import React from 'react';
import { motion } from 'framer-motion';

const AnalyzeButton = ({ onAnalyze }) => {
  return (
    <motion.div 
      className="text-center mt-6"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.button 
        onClick={onAnalyze}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95"
      >
        Analyze Video
      </motion.button>
    </motion.div>
  );
};

export default AnalyzeButton;
