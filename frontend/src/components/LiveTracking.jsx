import { useState, useEffect } from 'react'
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const LiveTracking = () => {
    const [ currentPosition, setCurrentPosition ] = useState(center);
    const [ locationError, setLocationError ] = useState('');
    const [ mapError, setMapError ] = useState('');

    useEffect(() => {
        if (!navigator.geolocation) {
            setLocationError('Geolocation is not supported by this browser.');
            return undefined;
        }

        const watchId = navigator.geolocation.watchPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setCurrentPosition({
                    lat: latitude,
                    lng: longitude
                });
                setLocationError('');
            },
            error => {
                setLocationError(
                    error.code === error.PERMISSION_DENIED
                        ? 'Location permission is blocked. Allow it in your browser site settings, then reload this page.'
                        : 'Unable to get your current location. Please try again.'
                );
            },
            { enableHighAccuracy: true, maximumAge: 10000, timeout: 10000 }
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    return (
        <div className='relative h-full w-full'>
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} onError={() => setMapError('Google Maps could not load. Disable your ad blocker for localhost or allow maps.googleapis.com, then reload.')}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={currentPosition}
                    zoom={15}
                >
                    <Marker position={currentPosition} />
                </GoogleMap>
            </LoadScript>
            {locationError && (
                <p className='absolute bottom-3 left-3 right-3 z-10 rounded-lg bg-white p-3 text-sm text-red-600 shadow'>
                    {locationError}
                </p>
            )}
            {mapError && (
                <p className='absolute left-3 right-3 top-3 z-10 rounded-lg bg-white p-3 text-sm text-red-600 shadow'>
                    {mapError}
                </p>
            )}
        </div>
    )
}

export default LiveTracking
