function CardButton({ children, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`absolute right-1 text-sm flex items-center justify-center size-7 border border-black rounded-full  active:translate-y-[0.10rem] active:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] ${color}`}
    >
      {children}
    </button>
  );
}

export default CardButton;
