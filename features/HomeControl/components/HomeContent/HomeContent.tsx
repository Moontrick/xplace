import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { homeStyles } from './styles';
import { Button } from 'tamagui'
import { useState } from 'react';

export function HomeContent() {
    const [state, setState] = useState<number>(0)
    const [color, setColor] = useState<boolean>(false)
    const onChange = () => {
        setState(prev => prev + 1)
    }

    const longPress = () => {
        setColor(true)
    }

  return (
    <View style={homeStyles.container}>
      <Text>{state}</Text>
      <Text>{color ? '123' : '321'}</Text>
      <Button size="$6" onPress={onChange} background={'blue'} style={{background: 'red !important'}}   color={'red'}
      onLongPress={longPress}
        >123</Button>
    </View>
  );
}