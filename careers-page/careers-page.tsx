import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import CareersPageDesktop from './careers-page.desktop';
import CareersPageMobile from './careers-page.mobile';

function CareersPage() {
  const isDesktop = useMediaQuery('(min-width:1025px)');
  const isMobile = useMediaQuery('(max-width:600px)');
  // const isTablet = useMediaQuery('(min-width: 500px) and (max-width: 1024px)');

  if (!isDesktop && !isMobile) {
    return null;
  }

  return (
    <div>
      {isDesktop && <CareersPageDesktop />}
      {isMobile && <CareersPageMobile />}
      {/* {isTablet && <CareersPageTablet />} */}
    </div>
  );
}
export default CareersPage;
