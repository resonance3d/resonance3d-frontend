import React from 'react';

const SingleGifView = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-full sm:w-[500px] h-[500px] sm:h-[500px]">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default SingleGifView;
