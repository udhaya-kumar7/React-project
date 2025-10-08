<<<<<<< HEAD
import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export const Advice = () => {
  const [advice, setAdvice] = useState("Please Click Button To Get Advice");
  const [count, setCount] = useState(0);
  const adviceRef = useRef(null);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);

    gsap.fromTo(
      adviceRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
    );
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <style>{`
        .advice-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea, #764ba2);
          font-family: "Poppins", sans-serif;
          color: #fff;
        }
        .advice-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          padding: 3rem 2.5rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          max-width: 500px;
          width: 90%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .advice-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.4);
        }
        .advice-text {
          font-size: 1.6rem;
          line-height: 1.5;
          margin-bottom: 2rem;
          color: #fff;
          letter-spacing: 0.5px;
          animation: fadeIn 0.8s ease;
        }
        .advice-btn {
          background: linear-gradient(135deg, #43e97b, #38f9d7);
          color: #111;
          border: none;
          padding: 0.9rem 1.8rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .advice-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(56, 249, 215, 0.6);
        }
        .counter-text {
          margin-top: 1.5rem;
          font-size: 1.1rem;
          color: #e0e0e0;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div className="advice-container">
        <div className="advice-card">
          <h1 ref={adviceRef} className="advice-text">{advice}</h1>
          <button className="advice-btn" onClick={getAdvice}>💡 Get New Advice</button>
          <p className="counter-text">You have read <b>{count}</b> pieces of advice 🧠</p>
        </div>
      </div>
    </div>
  );
};

=======
import React, { useEffect, useState } from 'react';
import './Advice.css'; // Add this line

export const Advice = () => {
    const [advice, setAdvice] = useState("Please Click Button To Get Advice");
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function getAdvice() {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch("https://api.adviceslip.com/advice");
            if (!res.ok) throw new Error("Failed to fetch advice");
            const data = await res.json();
            setAdvice(data.slip.advice);
            setCount((c) => c + 1);
        } catch (err) {
            setError("Could not fetch advice. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAdvice();
    }, []);

    return (
        <div className="advice-container">
            <h1>{error ? error : advice}</h1>
            <button onClick={getAdvice} disabled={loading}>
                {loading ? "Loading..." : "Get Advice"}
            </button>
            <Counter count={count} />
        </div>
    );
};

function Counter({ count }) {
    return (
        <p>
            You have read <b>{count}</b> pieces of advice
        </p>
    );
}

>>>>>>> bf078dba4b9f47f18be392692f0d825516d7e9df
export default Advice;
