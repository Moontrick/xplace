import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { homeStyles } from './styles';
import { useState } from 'react';
import { Map, Camera } from '@maplibre/maplibre-react-native';
import { Button } from 'shared/ui/Button';
import { IconButton } from 'shared/ui/IconButton';
import { IconUser } from 'public/assets/icons/IconUser';

export function HomeContent() {
  const [state, setState] = useState<number>(0);
  const [color, setColor] = useState<boolean>(false);
  const onChange = () => {
    setState((prev) => prev + 1);
  };

  const longPress = () => {
    setColor(true);
  };

  return (
    <View style={homeStyles.container}>
      <Map style={homeStyles.map} mapStyle="https://tiles.openfreemap.org/styles/liberty">
        <Camera initialViewState={{ center: [37.6, 55.75], zoom: 4 }} />
      </Map>
      <Text>123</Text>
      {/* <Text>{state}</Text>
      <Text>{color ? '123' : '321'}</Text>
      <Button size="$6" onPress={onChange} background={'blue'} style={{background: 'red !important'}}   color={'red'} onLongPress={longPress}>123</Button> */}
      <Text>123</Text>
    </View>
  );
}
