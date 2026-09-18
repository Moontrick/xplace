import { SvgTypesProps } from 'shared/types/SvgTypes';
import Svg, { Path } from 'react-native-svg';

export function IconChevronRight({ fill = 'red', width = 10, height = 10 }: SvgTypesProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 10 10" fill="none">
      <Path d="M3 9L7 5L3 1" stroke={fill} strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
}
