import { Bio } from '@sections/bio';
import { Contact } from '@sections/contact';
import { Experience } from '@sections/experience/experience';
import { Header } from '@sections/header';
import { Presentation } from '@sections/presentation';
import { TechStack } from '@sections/tech-stack/tech-stack';
import { TopProjects } from '@sections/top-projects/top-projects';

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 md:grid lg:grid-cols-4 lg:grid-rows-4'>
          <Bio />
          <Presentation />
          <TopProjects />
        </div>
        <div className='flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-1 lg:grid lg:grid-cols-6 lg:grid-rows-1'>
          <Experience />
          <Contact />
        </div>
        <TechStack />
      </main>
    </>
  );
}
