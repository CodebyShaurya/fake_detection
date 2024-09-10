import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <motion.div 
      className="mb-6 bg-white p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <label className="block text-lg font-medium text-gray-700 mb-2">Upload Your Video</label>
      <motion.input 
        type="file" 
        accept="video/*" 
        onChange={handleFileChange} 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer transition-all duration-300"
      />
      {selectedVideo && previewUrl && (
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <video className="rounded-lg border shadow-lg" width="100%" height="auto" controls>
            <source src={previewUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      )}
    </motion.div>
  );
};

export default UploadVideo;
