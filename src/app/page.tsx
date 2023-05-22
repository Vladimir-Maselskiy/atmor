'use client';
import { Footer } from '@/components/Footer/Footer';
import { HomeDescription } from '@/components/HomeDescription/HomeDescription';
import { HomeSolutionNav } from '@/components/HomeSolutionNav/HomeSolutionNav';
import { Slider } from '@/components/Slider/Slider';
import { Divider } from 'antd';

export default function Home() {
  return (
    <main>
      <Slider />
      <HomeSolutionNav />
      <HomeDescription />
      <Footer />
    </main>
  );
}
