import { Laugh } from 'lucide-react';

import { Box } from '@components/box';

export function Bio() {
  return (
    <Box
      className='col-span-2 row-span-2'
      icon={
        <Laugh
          size={16}
          color='gray'
        />
      }
    >
      <div>
        <h2 className='text-lg font-bold mb-2'>Sergio</h2>
        <li className='font-light'>
          {new Date().getFullYear() - new Date('04-14-1999').getFullYear()} Years old
        </li>
        <li className='font-light'>Medellín, Colombia 🇨🇴</li>
        <li className='font-light'>Senior Frontend Developer</li>
        <li className='font-light'>4+ years of experience</li>
      </div>
    </Box>
  );
}
