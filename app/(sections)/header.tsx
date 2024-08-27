import Image from 'next/image';

export function Header() {
  return (
    <header className='flex flex-col items-center justify-center gap-2 p-4 lg:flex-row lg:gap-6 lg: mb-6'>
      <Image
        width={100}
        height={100}
        src='/avatar.png'
        alt='avatar of Sergio Naranjo'
        className='rounded-full w-24 h-24 shadow-lg border-4 border-solid border-white bg-primary-500'
      />
      <div>
        <h1 className='text-3xl font-extrabold text-center lg:text-left'>
          Hello there! I&apos;m Sergio Naranjo
        </h1>
        <h2 className='text-2xl font-medium text-center lg:text-left mt-1'>Frontend Developer</h2>
      </div>
    </header>
  );
}
