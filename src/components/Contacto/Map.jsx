import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps"

export const MapGoogle = () => {
    const apiMapKey = import.meta.env.VITE_GoogleMapApiKey;
    const apiMapID = import.meta.env.VITE_GoogleMapID;

    const position = { lat: -34.97830248149604, lng: -67.68232521004583 }

    return (
        <>
            <APIProvider apiKey={apiMapKey}>
                <div className="map_container">
                    <Map
                        zoom={15}
                        center={position}
                        mapId={apiMapID}>
                        <AdvancedMarker position={position}></AdvancedMarker>
                    </Map>
                </div>
            </APIProvider>

        </>
    )
}