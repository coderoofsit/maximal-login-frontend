export const Input = ({ placeholder, className, ...props }) => {
  return (
    <input
      placeholder={placeholder}
      className={`border border-zinc-200 outline-blue-500 p-2 rounded-md ${className}`}
      {...props}
    />
  );
};
