import React from 'react';
import { Slider } from '../Slider/Slider';
import { HomeSolutionNav } from '../HomeSolutionNav/HomeSolutionNav';
import { HomeDescription } from '../HomeDescription/HomeDescription';
import { Footer } from '../Footer/Footer';
import { Box } from '../Box/Box';

export const Home = () => {
  return (
    <Box style={{ marginTop: 115 }}>
      <Slider />
      <HomeSolutionNav />
      <HomeDescription />
      <Footer />
    </Box>
  );
};
