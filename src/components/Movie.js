import React from 'react';
import Stars from './Stars'; // Import the Stars component
import ReviewList from './ReviewList'; // Import the ReviewList component
import ReviewForm from './ReviewForm'; // Import the ReviewForm component

export default class Movie extends React.Component {
    render() {
        // Destructure movie data from props
        const { name, synopsis, rating, reviews } = this.props.data;

        return (
            <div>
                {/* Display movie information */}
                <h2>{name}</h2>
                <p>Synopsis: {synopsis}</p>
                <p>Rating: {rating}</p>
                
                {/* Allow users to vote using the Stars component */}
                <Stars name={name} />

                {/* Display the list of reviews using the ReviewList component */}
                <ReviewList reviews={reviews} />

                {/* Allow users to leave a review using the ReviewForm component */}
                <ReviewForm />
            </div>
        );
    }
}
