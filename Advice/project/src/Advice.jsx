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

export default Advice;
