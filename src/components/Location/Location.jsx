

import React, { useEffect, useRef } from 'react';

const Location = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Load Google Maps API
    const script = document.createElement('script');
    script.src =`https://maps.googleapis.com/maps/api/js?key=AIzaSyAQ3ElUiuy-i-jImZs4uFQAaltY87ip59k&libraries=places`;
    script.async = true;

    script.onload = () => {
      // Initialize map
      const map = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco coordinates
        zoom: 12,
      });

      // Optional: Prompt user for their location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            map.setCenter(userLocation);
          },
          (error) => {
            console.error('Error getting user location:', error.message);
          }
        );
      }
    };

    script.onerror = () => {
      console.error('Error loading Google Maps API.');
      // Handle error as needed
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left div - 1/3 of the screen on large devices */}
      <div className="lg:w-1/3 bg-gray-200 p-4">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <p>This is where we are located.</p>
      </div>

      {/* Right div - 2/3 of the screen on large devices */}
      <div className="lg:w-2/3 h-full" ref={mapContainerRef}></div>
    </div>
  );
};

export default Location;

