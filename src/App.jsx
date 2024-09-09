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
          setResult('This video is Deepfaked!');
        } else {
          setResult('This video is not Deepfaked.');
        }
      } else {
        setResult('No video selected');
      }
    }, 2000); // Simulate loading for 2 seconds
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Deepfake Detection System</h1>
      <UploadVideo onVideoUpload={handleVideoUpload} selectedVideo={selectedVideo} />
      <AnalyzeButton onAnalyze={analyzeVideo} />
      {result === 'loading' ? (
        <div className="text-center mt-4">Analyzing...</div>
      ) : (
        result && <div className="text-center mt-4 text-lg">{result}</div>
      )}
    </div>
  );
}

export default App;
