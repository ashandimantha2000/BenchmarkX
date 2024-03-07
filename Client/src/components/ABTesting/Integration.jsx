import { useState, useEffect } from 'react';

const ABTestingComponent = () => {
  const [variant, setVariant] = useState('');

  // Function to choose a variant randomly
  const chooseVariant = () => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      setVariant('A');
    } else {
      setVariant('B');
    }
  };

  // Run A/B test when the component mounts
  useEffect(() => {
    chooseVariant();
  }, []);

  return (
    <div>
      {variant === 'A' && (
        <div>
          {/* Variant A content */}
          <h1>Variant A</h1>
          <p>Content for variant A.</p>
        </div>
      )}
      {variant === 'B' && (
        <div>
          {/* Variant B content */}
          <h1>Variant B</h1>
          <p>Content for variant B.</p>
        </div>
      )}
    </div>
  );
};

export default ABTestingComponent;
