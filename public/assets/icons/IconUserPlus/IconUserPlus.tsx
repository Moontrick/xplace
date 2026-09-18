import { SvgTypesProps } from 'shared/types/SvgTypes';
import Svg, { Path } from 'react-native-svg';

export function IconUserPlus({ fill = 'red', width = 17, height = 17 }: SvgTypesProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 17 17" fill="none">
      <Path
        d="M11.501 15.25V13.75C11.501 12.954 11.185 12.191 10.622 11.629C10.06 11.066 9.297 10.75 8.501 10.75H4.001C3.205 10.75 2.442 11.066 1.879 11.629C1.316 12.191 1 12.954 1 13.75V15.25M13.751 5.5V10M16.002 7.75H11.501M9.251 4.75C9.251 6.407 7.908 7.75 6.251 7.75C4.594 7.75 3.251 6.407 3.251 4.75C3.251 3.093 4.594 1.75 6.251 1.75C7.908 1.75 9.251 3.093 9.251 4.75Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}
