import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from '../../../firebase.config';
import { toast } from 'react-toastify';
import { getAuth } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface InfoBoxProps {
    info: {
      properties: {
        Name: string;
        description: string;
        gx_media_links: string;
      };
      geometry: {
        type: string;
        coordinates: [number, number];
    };
}}



const InfoBox: React.FC<InfoBoxProps> = ({ info }) => {
  const [Saved, setSaved] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUserLoggedIn = () => {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      setIsLoggedIn(currentUser !== null);
    };

    checkUserLoggedIn();
  }, []);

  useEffect(() => {
    const checkLocationSaved = async () => {
      try {
        const auth = getAuth();
        const currentUser = auth.currentUser;
        if (!currentUser) {
          console.error('No authenticated user found');
          return;
        }
        const userId: string = currentUser.uid;

        const userDocRef = doc(db, 'users', userId);
        const userDocSnap = await getDoc(userDocRef);
        const userDocData = userDocSnap.data();
        const { locationIds = [] } = userDocData || {};

        setSaved(locationIds.includes(info.properties.Name));
      } catch (error) {
        console.error('Error checking if location saved:', error);
      }
    };

    checkLocationSaved();
  }, [info.properties.Name]);

  const onClick = async () => {
    if (!isLoggedIn) {
      console.error('No authenticated user found');
      return;
    }

    try {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      if (!currentUser) {
        console.error('No authenticated user found');
        return;
      }
      const userId: string = currentUser.uid;

      const userDocRef = doc(db, 'users', userId);
      const userDocSnap = await getDoc(userDocRef);

      const userDocData = userDocSnap.data();
      const { locationIds = [] } = userDocData || {};

      // checking if ID already exists
      if (locationIds.includes(info.properties.Name)) {
        // Remove the location ID from the array
        await updateDoc(userDocRef, { locationIds: arrayRemove(info.properties.Name) });
        console.log('Location ID removed from user document');
        toast.success('Location removed')
        setSaved(false)
      } else {
        // Add the location ID to the array
        await setDoc(userDocRef, { locationIds: arrayUnion(info.properties.Name) }, {merge:true});
        console.log('Location ID added to user document');
        toast.success('Location Saved')
        setSaved(true)
      }
    } catch (error) {
        toast.error('Could not toggle Location');
    } 
  }

  const handleGoogleMapsClick = () => {
    const [longitude, latitude] = info?.geometry.coordinates ?? [];

    if (latitude && longitude) {
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      window.open(url, '_blank');
    }
  };


  return (
    <div className="infoBox" >
      {info && (
        <>
          <h2>
            <strong>{info.properties.Name ? info.properties.Name.toUpperCase() : ""}</strong>
          </h2>
          <ul>
            <li>
              <strong>
                {info.geometry.coordinates[0]}, {info.geometry.coordinates[1]}
              </strong>
            </li>
          </ul>
      <div className='buttonsContainer'>
        {isLoggedIn && (
          Saved ? 
            <button onClick={onClick} className='infoBox-button-unsave'><p>Unsave</p></button>
            :
            <button onClick={onClick} className='infoBox-button-save'><p>Save</p></button>
        )}
        <Link to={`/location/${info.properties.Name}`} >
          <button className='infoBoxMore' ><p>Details</p></button>
        </Link>
          <button  className='infoBoxMore' onClick={handleGoogleMapsClick}>Google pin</button>
      </div>
      </>
      )}
    </div>
  )
}

export default InfoBox
