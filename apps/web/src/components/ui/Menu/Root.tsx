export const Root = ({
  children,
  onClick,
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <button {...props} role="button" type="button" onClick={onClick}>
      {children}
    </button>
  );
};
