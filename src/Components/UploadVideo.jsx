import React, { useState } from 'react';

const UploadVideo = ({ onVideoUpload, selectedVideo }) => {
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      onVideoUpload(file);
    }
  };

  return (
    <div className="mb-4">
      <input 
        type="file" 
        accept="video/*" 
        onChange={handleFileChange} 
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
      />
      {selectedVideo && previewUrl && (
        <div className="mt-4">
          <video width="100%" height="auto" controls>
            <source src={previewUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default UploadVideo;
