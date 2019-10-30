import React from 'react';

const Tour = (props) => {
    const { id, city, img, name, info } = props.tour;
    return (
        <div className="ui card">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="content">
                <p className="header" style={{ textTransform: "uppercase", fontSize: 16 }}>{name}</p>
                <div className="meta">
                    <p>{info}</p>
                </div>
            </div>
        </div>
    );
}

export default Tour;