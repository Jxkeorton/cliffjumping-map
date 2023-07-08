import { Link } from 'react-router-dom'

interface Location {
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

interface Props {
  data: Location[];
  onDelete: (Name: string) => void;
}


const SavedLocations: React.FC<Props> = ({ data, onDelete }) => {

  return (
    
      <div className='location-cards'>
        {data.map((locationData: Location) =>(
          <div key={locationData.properties.Name} className='card'>
            <Link to={`/location/${locationData.properties.Name}`} className='locationLink' >
              <div>
                <h3>{locationData.properties.Name}</h3>
                <p>Coordinates: {locationData.geometry.coordinates.join(', ')}</p>
              </div>
            </Link>
            <button onClick={() => onDelete(locationData.properties.Name)} className='cardButton'><p>Unsave</p></button>
          </div>
        ))}
      </div>
    
    
  );
}

export default SavedLocations
