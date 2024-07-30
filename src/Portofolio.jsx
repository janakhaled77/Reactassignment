import React, { useState } from 'react';
import photo1 from "./assets/poert1.png";
import photo2 from "./assets/port2.png";
import photo3 from "./assets/port3.png";
import photo4 from "./assets/poert1.png";
import photo5 from "./assets/port2.png";
import photo6 from "./assets/port3.png";

// Array of photos
const photos = [
  { src: photo1, alt: 'house' },
  { src: photo2, alt: 'cake' },
  { src: photo3, alt: 'play-house' },
  { src: photo4, alt: 'house' },
  { src: photo5, alt: 'cake' },
  { src: photo6, alt: 'play-house' },
];

export default function Portfolio() {
  const [showPhoto, setShowPhoto] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);

  // Handle photo click to show enlarged version
  const handlePhotoClick = (photoSrc) => {
    setCurrentPhoto(photoSrc);
    setShowPhoto(true);
  };

  // Close the modal
  const handleClosePhoto = () => {
    setShowPhoto(false);
    setCurrentPhoto(null);
  };

  return (
    <div>
      <h2 className='text-gray-900 font-bold text-4xl text-center p-5 pt-32'>PORTFOLIO SECTION</h2>

      <div className="flex items-center justify-center mt-2">
        <div className="h-1 bg-gray-800 w-20"></div>
        <span className="mx-2 text-gray-800">★</span>
        <div className="h-1 bg-gray-800 w-20"></div>
      </div>

      <main>
        <div className="py-8">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
              {photos.map((photo, index) => (
                <div key={index} className="relative group cursor-pointer">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="rounded-lg w-full h-auto object-cover"
                      onClick={() => handlePhotoClick(photo.src)}
                    />
                    <div
                      className="absolute inset-0 bg-green-700 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex justify-center items-center"
                      onClick={() => handlePhotoClick(photo.src)}
                    >
                      <span className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <i className="fa-solid fa-plus text-9xl text-white"></i>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Modal for enlarged photo */}
      {showPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 cursor-pointer"
          onClick={handleClosePhoto}
        >
          <img
            src={currentPhoto}
            alt="Enlarged"
            className="max-w-screen-sm max-h-screen p-4 cursor-auto"
          />
        </div>
      )}
    </div>
  );
}
