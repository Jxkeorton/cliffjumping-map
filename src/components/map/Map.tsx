import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import InfoBox from './infoBox';
import { useState, useEffect } from 'react';

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

const Map: React.FC<MapProps> = ({ eventData }) => {
  const [infoBox, setInfoBox] = useState<Locations | null>(null);
  const [map, setMap] = useState<any>(null); // State to hold the map instance

  // Effect to fit map bounds when eventData changes
  useEffect(() => {
    if (map && eventData.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      eventData.forEach((location) => {
        const { geometry } = location;
        const { coordinates } = geometry;
        bounds.extend(new window.google.maps.LatLng(coordinates[1], coordinates[0]));
      });
      map.fitBounds(bounds);
    }
  }, [map, eventData]);

  const markers = eventData.map((location, index) => (
    <Marker
      key={index}
      lat={location.geometry.coordinates[1]}
      lng={location.geometry.coordinates[0]}
      text={`${index + 1}`}
      onClick={() => setInfoBox(location)}
      highlighted={infoBox === location}
    />
  ));

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        yesIWantToUseGoogleMapApiInternals
        defaultCenter={{ lat: 51.5074, lng: -0.1858 }}
        defaultZoom={7}
        onGoogleApiLoaded={({ map }) => setMap(map)}
      >
        {markers}
      </GoogleMapReact>
      {infoBox && <InfoBox info={infoBox} />}
    </div>
  );
};

export default Map;
