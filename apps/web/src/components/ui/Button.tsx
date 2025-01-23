interface ButtonProps {
  children: string;
  className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`bg-gradient-to-b from-rose-200 to-rose-300
        hover:from-rose-100 hover:to-rose-200 font-inter text-[14pt]
        font-semibold text-white-300 px-4 py-2 rounded-full ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };
