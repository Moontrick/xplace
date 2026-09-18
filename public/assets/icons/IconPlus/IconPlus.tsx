import { SvgTypesProps } from 'shared/types/SvgTypes';
import Svg, { Path } from 'react-native-svg';

export function IconPlus({ fill = 'red', width = 16, height = 16 }: SvgTypesProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M1 8.001H15.002M8.001 1V15.002"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}
