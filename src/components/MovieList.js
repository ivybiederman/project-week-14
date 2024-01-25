import React from 'react';
import Movie from './Movie'; // Import the Movie component

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Movie data for the application
            movies: [
                {
                    name: "Stepbrothers",
                    synopsis: "Hilarious comedy about two stepbrothers.",
                    rating: 4.5,
                    reviews: ["Great movie!", "Laughed a lot."],
                },
                {
                    name: "Princess Diaries",
                    synopsis: "A young girl discovers she's a princess.",
                    rating: 4.2,
                    reviews: ["Charming story!", "Perfect for a family night."],
                },
                {
                    name: "Mean Girls",
                    synopsis: "Teen comedy about high school life.",
                    rating: 4.0,
                    reviews: ["Classic!", "Funny and relatable."],
                },
                {
                    name: "Bob's Burgers",
                    synopsis: "Animated series about a quirky family-run burger joint.",
                    rating: 4.8,
                    reviews: ["Love the characters!", "Clever humor."],
                },
                {
                    name: "Lion King",
                    synopsis: "Epic animated film about a young lion's journey.",
                    rating: 4.7,
                    reviews: ["Timeless masterpiece!", "Beautiful animation."],
                },
            ],
        };
    }

    render() {
        return (
            <div>
                {/* Map through movie data and render Movie components */}
                {this.state.movies.map((movie, index) => (
                    <Movie key={index} data={movie} />
                ))}
            </div>
        );
    }
}
