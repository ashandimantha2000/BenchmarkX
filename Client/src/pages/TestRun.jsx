import React, { useEffect, useRef } from 'react';

const TrackSessionTime = () => {
  const startTimeRef = useRef(new Date().getTime());

  useEffect(() => {
    const handleUnload = () => {
      const endTime = new Date().getTime();
      const sessionTime = (endTime - startTimeRef.current) / 1000; // Convert to seconds
      console.log(`Visiting session time: ${sessionTime} seconds`);
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);

  return (
    <div>
      <h1>Tracking Session Time</h1>
      <p>This is your webpage content.</p>
    </div>
  );
};

export default TrackSessionTime;
