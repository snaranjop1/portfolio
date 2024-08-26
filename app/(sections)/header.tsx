'use client';

import Image from 'next/image';
import { toast } from 'sonner';

import { EMAIL } from '@/constants';

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
      <h1 className='text-lg max-w-[500px] font-semibold text-center lg:text-left'>
        Hey! I&apos;m Sergio Naranjo. Check out my work, and if anything catches your eye,
        don&apos;t hesitate to{' '}
        <span
          className='underline underline-offset-2 hover:text-primary-500 hover:cursor-pointer'
          onClick={() => {
            navigator.clipboard.writeText(EMAIL);
            toast.success('Email copied to clipboard!');
          }}
        >
          get in touch
        </span>
        .
      </h1>
    </header>
  );
}
