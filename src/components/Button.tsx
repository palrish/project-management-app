export default function Button({ children, ...props }: any) {
  return (
    <button
      {...props}
      className="px-4 py-2 text-xs rounded-md bg-stone-700 text-stone-200 hover:bg-stone-600 hover:text-stone-100"
    >
      {children}
    </button>
  );
}
