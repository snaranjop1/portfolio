import { Bio } from '@sections/bio';
import { Contact } from '@sections/contact';
import { Experience } from '@sections/experience/experience';
import { Header } from '@sections/header';
import { Presentation } from '@sections/presentation';
import { TechStack } from '@sections/tech-stack/tech-stack';
import { TopProjects } from '@sections/top-projects/top-projects';

export default function Home() {
  return (
    <div className='p-10 max-w-screen-lg m-auto'>
      <Header />
      <main className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:gap-4'>
          <Bio />
          <Presentation />
          <TopProjects />
        </div>
        <div className='flex flex-col gap-4 lg:grid lg:grid-cols-6 lg:grid-rows-1 lg:gap-4'>
          <Experience />
          <Contact />
        </div>
        <TechStack />
      </main>
      <footer className='mt-10'>
        <p className='text-sm text-center text-neutral-500'>
          naranhack &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
