import { Box } from '@components/box';

import { DatascopeIcon, FirebaseIcon, ReactIcon } from '@/icons';

export function Presentation() {
  return (
    <Box className='col-span-2 row-span-2 col-start-1 row-start-3'>
      <p>
        Currently, I work as Front-End Developer at{' '}
        <span className='border shadow-sm px-[4px] rounded-md inline-flex items-center text-sm gap-1'>
          <DatascopeIcon
            width={14}
            height={14}
          />
          DataScope
        </span>
        {', '}
        focusing on{' '}
        <span className='border shadow-sm px-[4px] rounded-md inline-flex items-center text-sm gap-1'>
          <ReactIcon
            width={14}
            height={14}
          />
          React
        </span>{' '}
        and{' '}
        <span className='border shadow-sm px-[4px] rounded-md inline-flex items-center text-sm gap-1'>
          <FirebaseIcon
            width={14}
            height={14}
          />
          Firebase
        </span>{' '}
        to build user-friendly interfaces. In my spare time, I dive into anime and comics, catch
        soccer games, and spend plenty of time playing with my dogs.
      </p>
    </Box>
  );
}
