import React from 'react';
import Tour from './Tour';
import { tourData } from '../tourData';

class TourList extends React.Component {
    state = {
        tours: tourData
    };

    render() {
        return (
            <div className="ui container">
                <div className="ui four column grid">
                {this.state.tours.map((tour) => {
                    return (
                        <div className="column">
                            <Tour key={tour.id} tour={tour} />
                        </div>
                    );
                })}
                </div>
            </div>
        );
    }
}

export default TourList;