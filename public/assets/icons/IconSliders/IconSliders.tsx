import { SvgTypesProps } from 'shared/types/SvgTypes';
import Svg, { Path } from 'react-native-svg';

export function IconSliders({ fill = 'red', width = 14, height = 14 }: SvgTypesProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 14" fill="none">
      <Path
        d="M5.667 2.333H1M7 11.667H1M8.333 1V3.667M9.667 10.333V13M13 7H7M13 11.667H9.667M13 2.333H8.333M4.333 5.667V8.333M4.333 7H1"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}
