import React from 'react';
import ConverterForm from './components/ConverterForm';

const App = () => {
  return (
    <div className="relative min-h-screen w-full font-sans text-white overflow-hidden">
      {/* 🔥 Video Background */}
      <video
        autoPlay
        muted
        loop
        id="bgVideo"
        className="fixed inset-0 w-full h-full object-cover z-[-1]" // ✅ fully responsive to <300px
      >
        <source src="/1992-153555258_tiny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 💱 Centered Foreground Content */}
      <div className="flex justify-center items-center min-h-screen w-full z-10 px-2">
        <div className="bg-black/30 backdrop-blur-md p-4 rounded-2xl w-full max-w-sm">
          <ConverterForm />
        </div>
      </div>
    </div>
  );
};

export default App;
