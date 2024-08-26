interface TechProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

export function Tech({ icon, name, description }: TechProps) {
  return (
    <>
      <div className='flex items-center gap-2'>
        <div className='border-dashed border border-neutral-300 w-fit p-3 rounded-xl'>{icon}</div>
        <div>
          <h3 className='font-semibold'>{name}</h3>
          <p className='text-xs font-thin'>{description}</p>
        </div>
      </div>
    </>
  );
}
