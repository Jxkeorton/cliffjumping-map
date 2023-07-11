import { useNavigate } from 'react-router-dom';

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
  location: Location;
}

const LocationsResultsCard: React.FC<Props> = ({ location }) => {
  const {Name} = location.properties;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/location/${Name}`);
  };

  return (
    <div className="searchResults" onClick={handleClick}>
      <h4>{Name}</h4>
    </div>
  );
};

export default LocationsResultsCard;