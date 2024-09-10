import React, { useState } from 'react';
import UploadVideo from './Components/UploadVideo';
import AnalyzeButton from './Components/AnalyzeButton';
import { motion } from 'framer-motion';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [result, setResult] = useState('');

  const handleVideoUpload = (file) => {
    setSelectedVideo(file);
  };

  const analyzeVideo = () => {
    // Simulate a loader for 2 seconds
    setResult('loading');
    setTimeout(() => {
      if (selectedVideo) {
        const videoName = selectedVideo.name.toLowerCase();
        const videoNumber = parseInt(videoName.match(/\d+/)[0]);

        if (videoNumber % 2 === 0) {
          setResult('THIS VIDEO IS DEEPFAKED!');
        } else {
          setResult('THIS VIDEO IS NOT DEEPFAKED!');
        }
      } else {
        setResult('No video selected');
      }
    }, 2000);
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-r from-indigo-50 to-indigo-100 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Deepfake Detection System</h1>
      <motion.div 
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <UploadVideo onVideoUpload={handleVideoUpload} selectedVideo={selectedVideo} />
        <AnalyzeButton onAnalyze={analyzeVideo} />
        {result === 'loading' ? (
          <div className="flex justify-center mt-6">
            <div className="flex space-x-3">
              <motion.div 
                className="w-5 h-5 bg-indigo-700 rounded-full"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
              />
              <motion.div 
                className="w-5 h-5 bg-indigo-500 rounded-full"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
              />
              <motion.div 
                className="w-5 h-5 bg-indigo-300 rounded-full"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
              />
            </div>
          </div>
        ) : (
          result && (
            <motion.div 
              className="text-center mt-8 text-2xl font-semibold text-indigo-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {result}
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  );
}

export default App;
