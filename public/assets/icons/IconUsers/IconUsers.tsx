import { SvgTypesProps } from 'shared/types/SvgTypes';
import Svg, { Path } from 'react-native-svg';

export function IconUsers({ fill = 'red', width = 19, height = 19 }: SvgTypesProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 19 19" fill="none">
      <Path
        d="M14.5 17C14.5 15.232 13.797 13.536 12.547 12.286C11.296 11.036 9.601 10.333 7.832 10.333M7.832 10.333C6.064 10.333 4.368 11.036 3.118 12.286C1.867 13.536 1.165 15.232 1.165 17M7.832 10.333C10.134 10.333 11.999 8.468 11.999 6.167C11.999 3.865 10.134 2 7.832 2C5.531 2 3.665 3.865 3.665 6.167C3.665 8.468 5.531 10.333 7.832 10.333ZM17.833 16.167C17.833 13.358 16.166 10.75 14.499 9.5C15.047 9.089 15.485 8.549 15.775 7.929C16.065 7.308 16.197 6.626 16.16 5.942C16.122 5.258 15.917 4.594 15.562 4.008C15.207 3.422 14.713 2.933 14.124 2.583"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}
