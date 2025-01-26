interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

const Card = ({ className, children }: CardProps) => {
  return (
    <div
      role="group"
      className={`
        flex w-min rounded-xl p-4
        border-[1px] border-dark-800
        ${className}`}
    >
      {children}
    </div>
  );
};

export { Card };
