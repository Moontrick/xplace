import { SvgTypesProps } from 'shared/types/SvgTypes';
import Svg, { Path } from 'react-native-svg';

export function IconMapPin({ fill = 'red', width = 21, height = 21 }: SvgTypesProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 21 21" fill="none">
      <Path
        d="M11.049 19.485C12.754 18.013 17.831 13.246 17.831 8.669C17.831 6.724 17.058 4.858 15.683 3.483C14.308 2.107 12.443 1.335 10.498 1.335C8.553 1.335 6.688 2.107 5.313 3.483C3.938 4.858 3.165 6.724 3.165 8.669C3.165 13.246 8.242 18.013 9.947 19.485C10.106 19.605 10.299 19.669 10.498 19.669C10.697 19.669 10.89 19.605 11.049 19.485Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}
