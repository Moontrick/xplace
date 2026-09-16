import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { homeStyles } from './styles';
import { useState } from 'react';
import { Map } from '@maplibre/maplibre-react-native';
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
      {/* <Map
        style={{ flex: 1 }}
        mapStyle="https://demotiles.maplibre.org/style.json"
      /> */}
      {/* <Text>{state}</Text>
      <Text>{color ? '123' : '321'}</Text>
      <Button size="$6" onPress={onChange} background={'blue'} style={{background: 'red !important'}}   color={'red'} onLongPress={longPress}>123</Button> */}
      <Text>123</Text>
    </View>
  );
}
