import React, { useState } from 'react';
import UploadVideo from './Components/UploadVideo';
import AnalyzeButton from './Components/AnalyzeButton';

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
        // Get video name and analyze based on your logic
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
    }, 2000); // Simulate loading for 2 seconds
  };

  return (
    <div className="container mx-auto p-4">
      <div className='text-center'>
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Deepfake Detection </span> System</h1>
      <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"></p></div>
      <UploadVideo onVideoUpload={handleVideoUpload} selectedVideo={selectedVideo} />
      <AnalyzeButton onAnalyze={analyzeVideo} />
      
      {result === 'loading' ? (
        <div class="flex item-center justify-center m-5 flex-row gap-2">
        <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
        <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
        <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
      </div>
      ) : (
        result && <div className="text-center mt-4 text-4xl font-semibold">{result}</div>
      )}
    </div>
  );
}

export default App;
