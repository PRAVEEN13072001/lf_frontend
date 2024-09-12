import React, { useState } from 'react';

function HomePage() {
  // State to store input values
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [lovePercentage, setLovePercentage] = useState(null); // State to store love percentage
  const [loveDescription, setLoveDescription] = useState(''); // State to store love description

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/names', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, secondName }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Generate a random love percentage between 50% and 100%
        const randomPercentage = Math.floor(Math.random() * 51) + 50;
        setLovePercentage(randomPercentage);

        // Set love description based on percentage
        if (randomPercentage >= 90) {
          setLoveDescription('True soulmates! Your love is as strong as it gets!');
        } else if (randomPercentage >= 80) {
          setLoveDescription('Your connection is deep and beautiful. Almost perfect!');
        } else if (randomPercentage >= 70) {
          setLoveDescription('You two have a wonderful bond. Keep nurturing it!');
        } else if (randomPercentage >= 60) {
          setLoveDescription('There’s love here, but there’s room to grow.');
        } else {
          setLoveDescription('There’s some spark, but you might need to work on your relationship.');
        }
      } else {
        console.error('Failed to submit names');
      }
    } catch (error) {
      console.error('Error during API call:', error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url(https://wallpaperset.com/w/full/d/8/0/215558.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div style={{ maxWidth: '600px', width: '100%', padding: '30px', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '15px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}>
        <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Love Calculator</h2>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#333' }}>
              Your Name:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                }}
                required
              />
            </label>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#333' }}>
              Partner Name:
              <input
                type="text"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                }}
                required
              />
            </label>
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#ff4b5c',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#e24450')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff4b5c')}
          >
            Calculate Love
          </button>
        </form>

        {/* Display submitted names, love percentage, and love description */}
        {submitted && (
          <div style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '10px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ color: '#333' }}>Result:</h3>
            {lovePercentage !== null && (
              <>
                <h4 style={{ color: '#ff4b5c', marginTop: '10px' }}>Love Percentage: {lovePercentage}%</h4>
                <p style={{ color: '#555', marginTop: '10px' }}>{loveDescription}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
