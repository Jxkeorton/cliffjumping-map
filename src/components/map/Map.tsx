import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import InfoBox from './infoBox';
import { useState } from 'react';

interface Locations {
  properties: {
    Name: string;
    description: string;
    gx_media_links: string;
  };
  geometry: {
    type: string;
    coordinates: [number, number];
};
}

interface MapProps {
  eventData: Locations[];
}

const apiKey: string = process.env.GOOGLE_MAPS_API_KEY || '';

if (!apiKey) {
  console.error("Google Maps API key is missing or empty. Please provide a valid API key.");
}

const Map: React.FC<MapProps> = ({ eventData }) => {
  const [infoBox, setInfoBox] = useState<Locations | null>(null);

  const markers = eventData.map((location, index) => {
    const { geometry } = location
    const { coordinates } = geometry;
    return (
      <Marker
        key={index}
        lat={coordinates[1]} 
        lng={coordinates[0]} 
        text={`${index + 1}`}
        onClick={() => setInfoBox(location)}
        highlighted={infoBox === location}
      />
    );
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDsDcQb5TxfLwM7LLZRPtXNC1qy4eIzFDw' }}
        defaultCenter={{ lat: 51.5074, lng: -0.1858 }}
        defaultZoom={7}
      >
        {markers}
      </GoogleMapReact>
      {infoBox && <InfoBox info={infoBox} />}
    </div>
  );
};

export default Map;