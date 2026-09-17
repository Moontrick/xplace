import { Map, Camera, UserLocation } from '@maplibre/maplibre-react-native';
import { mapStyles } from './styles';
import { useMapContainer } from '../../hooks/useMapContainer';
export function MapContainer() {
  const { cameraRef, onUserStartMove, onUserStopMove } = useMapContainer();
  return (
    <Map
      style={mapStyles.map}
      mapStyle="https://tiles.openfreemap.org/styles/liberty"
      logo={false}
      attribution={false}
      onTouchStart={onUserStartMove}
      onTouchEnd={onUserStopMove}
    >
      <Camera
        ref={cameraRef}
        // initialViewState={{
        //   center: [37.6, 55.75],
        //   zoom: 4,
        // }}
      />

      <UserLocation animated accuracy />
    </Map>
  );
}
