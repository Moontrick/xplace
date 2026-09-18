import { SvgTypesProps } from 'shared/types/SvgTypes';
import Svg, { Path } from 'react-native-svg';

export function IconSearch({ fill = 'red', width = 17, height = 17 }: SvgTypesProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 17 17" fill="none">
      <Path
        d="M16 16L12.383 12.383M14.333 7.667C14.333 11.349 11.349 14.333 7.667 14.333C3.985 14.333 1 11.349 1 7.667C1 3.985 3.985 1 7.667 1C11.349 1 14.333 3.985 14.333 7.667Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}
