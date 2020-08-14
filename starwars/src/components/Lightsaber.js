import React from 'react';

const Lightsaber = () => {
    return (
        <div className="lightsaber">
            <label htmlFor="obi-wan"></label>
            <input type="checkbox" id="obi-wan"/>
            <div className="switch"></div>
            <div className="plasma obi-wan"></div>
        </div>
    )
}

export default Lightsaber;