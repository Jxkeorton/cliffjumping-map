import { getAuth } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SavedLocations from '../pagecomponents/SavedLocations';
import { doc, getDoc, updateDoc, arrayRemove } from 'firebase/firestore';
import { db } from '../../../firebase.config';
import { PacmanLoader } from 'react-spinners';
import {toast} from 'react-toastify'

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

interface ApiData {
  locations: Location[];
}

function Profile() {
  const auth = getAuth();
  const [ filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  const [ fetchedData, setFetchedData] = useState<Location[]>([]);
  const [locations, setLocations] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getLocations = async () => {
      try {
          const currentUser = auth.currentUser;
          if (!currentUser) {
          toast.error('No authenticated user found');
          return;
          }
          const userId: string = currentUser.uid;

          const userDocRef = doc(db, 'users', userId);
          const userDocSnap = await getDoc(userDocRef);
          const userDocData = userDocSnap.data();
          const locationIds: string[] = userDocData?.locationIds || [];
          console.log('Location IDs:', locationIds);

          setLocations(locationIds)

          const response = await fetch('https://raw.githubusercontent.com/Jxkeorton/APIs/main/cliffjump.json');
          const data: ApiData = await response.json();

          setFetchedData(data.locations)
          console.log('Fetched Data:', data);

      } catch (error) {
        toast.error('Could not get locations');
      }
        setIsLoading(false);
      };

      getLocations();
  }, []);

  useEffect(() => {
    const filteredData = fetchedData.filter((obj: Location) => locations.includes(obj.properties.Name));
    setFilteredLocations(filteredData);

  }, [locations, fetchedData]);

  const onDelete = async (locationId: string) => {
    
    try {
      
      const currentUser = auth.currentUser;
      if (!currentUser) {
        toast.error('No authenticated user found');
        return;
      }
      const userId: string = currentUser.uid;
      const userDocRef = doc(db, 'users', userId);
      await updateDoc(userDocRef, {
        locationIds: arrayRemove(locationId)
      });
      toast.success('Location deleted successfully');
  
      // Update the filteredLocations state by removing the deleted location
      setFilteredLocations(filteredLocations.filter((location) => location.properties.Name !== locationId));
    } catch (error) {
      toast.error('Could not delete location:');
    }
  };

  const onLogout = () => {
    auth.signOut();
    navigate('/log-in');
  }

  console.log('filtered locations:', filteredLocations)

  const override: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
  };
  
  return (
    <>
      <div className='profile' >
          <p className='page-header'>My Profile</p>
        <button type='button' className='logOut' onClick={onLogout} >
            Logout
          </button>
      </div>
        <h2 className='Saved-locations-h2'>
          {filteredLocations.length > 0 ? 'Saved Locations' : 'Use the map to save locations' }
        </h2>
        {isLoading ? (
          <PacmanLoader color='black' cssOverride={override} />
        ) : (
          <SavedLocations data={filteredLocations} onDelete={onDelete} />
        )}
    </>
  )
}

export default Profile
