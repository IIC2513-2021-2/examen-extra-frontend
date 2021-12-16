import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="initial-box">
        <h1>The International Space Station (ISS)</h1>
        <div className="nested-box">
          <p className="paragraph">
            The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit.
          </p>
          <Link className="btn" to="/expeditions">Explore the expeditions</Link>
        </div>
        {/* https://go4liftoff.com/spacestation/international-space-station */}
        <img
          alt="The International Space Station"
          src="https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/spacestation_images/international2520space2520station_image_20190220215716.jpeg"
        />
      </div>
    </>
  );
}
