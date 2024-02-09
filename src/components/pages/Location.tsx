import { useState, useEffect } from 'react'
import { useParams  } from 'react-router-dom';
import { doc, getDoc, collection, updateDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase.config';
import { getAuth } from 'firebase/auth';
import { PacmanLoader } from 'react-spinners';
import LocationMap from '../pagecomponents/LocationMap'
import {toast} from 'react-toastify'
import Filter from 'bad-words'

interface Location {
  properties: {
    Name: string;
    description: string;
    gx_media_links: string;
    height: string;
  };
  geometry: {
    type: string;
    coordinates: [number, number];
};
}

interface Comment {
  comment: string;
  userId: string;
  displayName: string;
}

interface MoreData {
  ID: string;
  Notes: string;
  imageUrls: string[];
  comments: Comment[];
}

function Location() {
  const [location, setLocation] = useState<Location |null>(null)
  const [loading, setLoading] = useState(true)
  const [comments, setComments] = useState<Comment[]>([]);
  const [comment, setComment] = useState('');

  const params = useParams()
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const collectionRef = collection(db, 'locations');
  const locationRef = doc(collectionRef, params.locationId);

  const filter = new Filter();

  // use effect to fetch location from json-server

  useEffect(() => {

    const fetchData = async () => {
      try {
        const locationId = params.locationId;
        if (!locationId) {
          throw new Error('Location ID is undefined');
        }
    
        const response = await fetch('https://github.com/Jxkeorton/APIs/blob/main/cliffjump.json');
        if (!response.ok) {
          throw new Error('Failed to fetch location');
        }
        const data = await response.json();
        const parsedLocationId = locationId;
        const location = data.locations.find((loc: Location) => loc.properties.Name === parsedLocationId);
        console.log(location);
        setLocation(location);
      } catch (error) {
        toast.error('Error fetching location');
      }

      try {
        const collectionRef = collection(db, 'locations');
        const docRef = doc(collectionRef, params.locationId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const locationData = docSnap.data() as MoreData;
          console.log(locationData);
          setComments(locationData.comments || []);
        }
      } catch (error) {
        toast.error('Error fetching additional data:');
      }

      setLoading(false);
    };

    fetchData();

    // Set up Firestore listener for comments
    const unsubscribe = onSnapshot(locationRef, (docSnap) => {
      if (docSnap.exists()) {
        const locationData = docSnap.data() as MoreData;
        console.log(locationData);
        setComments(locationData.comments || []);
      }
    });

    return () => {
      // Clean up the listener on unmount
      unsubscribe();
    };

  }, [params.locationId]);

  // add comment 

  const addComment = async () => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        throw new Error('User is not authenticated');
      }
      
      const displayName = currentUser.displayName;
      const userId = currentUser.uid;
  
      const collectionRef = collection(db, 'locations');
      const locationRef = doc(collectionRef, params.locationId);
      const docSnap = await getDoc(locationRef);

      if (docSnap.exists()) {
        const locationData = docSnap.data() as MoreData;
        let updatedComments;
  
        if (locationData.comments) {
          updatedComments = [
            ...locationData.comments,
            { 
              comment: comment,
              userId: currentUser.uid, 
              displayName: currentUser.displayName ?? '',
            }
          ];
        } else {
          updatedComments = [
            { 
              comment: comment,
              userId: currentUser.uid, 
              displayName: currentUser.displayName ?? '',
            }
          ];
        }
  
        await updateDoc(locationRef, { comments: updatedComments });
  
        setComments(updatedComments);
        setComment('');
      } else {
        await setDoc(locationRef, { comments: [{ comment, userId, displayName }] });
  
        setComments([
          {
            comment: comment,
            userId: currentUser.uid,
            displayName: currentUser.displayName ?? '',
          },
        ]);
        setComment('');
      }
    } catch (error) {
      toast.error('Error adding comment:');
    }
  };

  const handleGoogleMapsClick = () => {
    const [latitude, longitude] = location?.geometry.coordinates ?? [];

    if (latitude && longitude) {
      const url = `https://www.google.com/maps/search/?api=1&query=${longitude},${latitude}`;
      window.open(url, '_blank');
    }
  };
  
  const override: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
  };

  if(loading) {
    return <PacmanLoader color="black" cssOverride={override} />
  }

  return (
  <div className="container">
    <h1 className="title">{location?.properties.Name.toUpperCase()}</h1>

    {location ? (<LocationMap
      text={`${location.properties.Name + 1}`}
      center={{ lat: location.geometry.coordinates[1], lng: location.geometry.coordinates[0] }}
      zoom={15}
    />):(<h1>Could Not Load Location</h1>) }

    <div className="button-container" ><button  className='go-to-google-button' onClick={handleGoogleMapsClick}>Open in Google Maps</button></div>
    

    <div className="location-details">
      <h2 className="subtitle">Location Details</h2>
      <ul>
        <li>
          {location?.properties.height ? (
            <div>
              <h2>Height:</h2>
              <p className='value' >{location.properties.height}ft</p>
            </div>
          ) : (
            <p className="value"></p>
          )}
        </li>
        <li>
          {location?.properties.description ? (
            <div
              className="value"
              dangerouslySetInnerHTML={{ __html: location.properties.description }}
            ></div>
          ) : (
            <h2 className="value">?</h2>
          )}
        </li>
        
        
      </ul>
    </div>

    <div className="comments">
      <h2 className="subtitle">Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.displayName}: </strong>
            <span className="value">{comment.comment ? filter.clean(comment.comment) : ''}</span>
          </li>
        ))}
      </ul>
      {currentUser && (
        <div className="add-comment">
          <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
          <button onClick={addComment}>Add Comment</button>
        </div>
      )}
    </div>
  </div>

  )
}

export default Location
