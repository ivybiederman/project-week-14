import React, { useState } from 'react';

// ReviewForm component for leaving reviews
const ReviewForm = () => {
    // State to track the user's review text
    const [reviewText, setReviewText] = useState('');

    // Function to handle review submission
    const handleReviewSubmit = () => {
        // You can perform actions with the submitted review, such as saving it to the server.
        // For now, let's log it to the console.
        console.log('Submitted Review:', reviewText);
        // Reset the review text after submission
        setReviewText('');
    };

    return (
        <div>
            {/* Display the prompt for leaving a review */}
            <p>Leave a Review:</p>
            {/* Input for user's review */}
            <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review here..."
            ></textarea>
            {/* Button to submit the review */}
            <button onClick={handleReviewSubmit}>Submit Review</button>
        </div>
    );
};

export default ReviewForm;
