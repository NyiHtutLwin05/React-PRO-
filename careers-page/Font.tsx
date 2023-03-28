import { Global } from '@mantine/core';
import bold from '../assets/Poppins-Bold.ttf';
import regular from '../assets/Poppins-Regular.ttf';

const Font = function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Poppins',
            src: `url('${regular}') format("truetype")`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Poppins_Bold',
            src: `url('${bold}') format("truetype")`,
            fontWeight: 800,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
};
export default Font;
