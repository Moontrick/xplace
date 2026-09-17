import * as Location from 'expo-location';
import { useEffect, useRef, useState } from 'react';
import { type CameraRef } from '@maplibre/maplibre-react-native';
import { DELAY_POSITION_MOVE_TIME, DELAY_POSITION_TIME } from '@/shared/constants/time';

export function useMapContainer() {
  const cameraRef = useRef<CameraRef>(null);
  const [isUserStartMove, setIsUserStartMove] = useState<boolean>(false);
  const [isUserStopMove, setIsUserStopMove] = useState<boolean>(true);

  useEffect(() => {
    const getLocation = async () => {
      //   if (isUserStartMove) return;
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      console.log(location);
      const { longitude, latitude } = location.coords;
      cameraRef.current?.flyTo({
        center: [longitude, latitude],
        zoom: 11,
        duration: 1000,
      });
    };

    getLocation();

    // //Функция на обновление позиции
    // const intervalId = setInterval(() => {
    //   getLocation();
    // }, DELAY_POSITION_TIME);

    // return () => {
    //   clearInterval(intervalId);
    // };
  }, []);

  //   useEffect(() => {
  //     if (!isUserStartMove && !isUserStopMove) return;

  //     const interval = setInterval(() => {
  //       setIsUserStartMove(false);
  //     }, DELAY_POSITION_MOVE_TIME);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, [isUserStartMove, isUserStopMove]);

  function onUserStartMove() {
    setIsUserStartMove(true);
    setIsUserStopMove(false);
  }
  function onUserStopMove() {
    setIsUserStopMove(true);
  }

  return {
    cameraRef,
    onUserStartMove,
    onUserStopMove,
  };
}
