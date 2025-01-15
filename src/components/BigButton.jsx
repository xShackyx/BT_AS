function BigButton({
  children,
  color,
  onClick,
  yAxys = "top-1",
  xAxys = "right-1",
}) {
  return (
    <button
      onClick={onClick}
      className={`absolute ${yAxys} ${xAxys} text-sm flex items-center justify-center size-7 border border-black rounded-full  active:translate-y-[0.10rem] active:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] ${color}`}
    >
      {children}
    </button>
  );
}

export default BigButton;
