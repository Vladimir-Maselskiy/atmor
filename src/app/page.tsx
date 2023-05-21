'use client';
import { HomeDescription } from '@/components/HomeDescription/HomeDescription';
import { HomeSolutionNav } from '@/components/HomeSolutionNav/HomeSolutionNav';
import { Slider } from '@/components/Slider/Slider';

export default function Home() {
  return (
    <main>
      <Slider />
      <HomeSolutionNav />
      <HomeDescription />
    </main>
  );
}
