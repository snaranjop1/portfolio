interface JobProps {
  current?: boolean;
  name: string;
  dates: string;
}

export function Job({ current = false, name, dates }: JobProps) {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-between'>
      <h3 className='flex items-center gap-2 lg:gap-4'>
        {current ? (
          <span className='relative flex h-2 w-2 items-center justify-center'>
            <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-primary-500 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-primary-400'></span>
          </span>
        ) : (
          <span className='relative flex h-2 w-2 items-center justify-center'>
            <span className='absolute inline-flex rounded-full h-4 w-4 bg-gray-400 opacity-25'></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-gray-400 border-3 border-red'></span>
          </span>
        )}
        {name}
      </h3>
      <p className='text-sm'>{current ? 'Current' : dates}</p>
    </div>
  );
}
