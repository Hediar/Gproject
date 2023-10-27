const BottomDots = () => {
  return (
    <>
      <div className="h-[15px] flex gap-[5px] bg-inherit relative">
        <div className="w-[15px] h-[15px] origin-top-left -rotate-90 bg-sky-600 rounded-full" />
        <div className="w-2.5 h-2.5 origin-top-left -rotate-90 bg-neutral-300 rounded-full felx-col" />
        <div className="w-2.5 h-2.5 origin-top-left -rotate-90 bg-neutral-300 rounded-full" />
      </div>
    </>
  );
};

export default BottomDots;
