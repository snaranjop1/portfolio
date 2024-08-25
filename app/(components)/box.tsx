interface BoxProps {
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Box({ className, children, icon }: BoxProps) {
  return (
    <div className={`${className ?? ''} border border-gray-300 shadow-sm rounded-xl p-8`}>
      {icon && <div className='p-2 border w-fit shadow-sm rounded-lg mb-4'>{icon}</div>}
      {children}
    </div>
  );
}
