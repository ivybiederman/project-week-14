import React, { useState } from 'react';

// Stars component for voting
const Stars = ({ name }) => {
    // State to track the selected rating
    const [rating, setRating] = useState(0);

    // Function to handle user's rating selection
    const handleRating = (newRating) => {
        setRating(newRating);
    };

    return (
        <div>
            {/* Display the prompt for voting */}
            <p>Vote:</p>
            {/* Display stars for voting */}
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => handleRating(star)}>
                    {/* Display filled or empty stars based on user's selection */}
                    {star <= rating ? "★" : "☆"}
                </span>
            ))}
        </div>
    );
};

export default Stars;
