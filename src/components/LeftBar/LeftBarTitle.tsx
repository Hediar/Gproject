const LeftBarTitle = () => {
  return (
    <>
      <div className="w-[295px] h-[27px] relative mb-[20px]">
        <div className="w-[283px] h-0.5 left-0 top-[25px] absolute opacity-50 bg-blue-500"></div>
        <div className="h-[27px] left-0 top-0 absolute flex-col justify-center items-start gap-[5px] inline-flex">
          <div className="text-zinc-600 text-lg font-bold">스마트 도시 서비스 주요 현황</div>
        </div>
        <div className="w-2.5 h-0.5 left-[285px] top-[25px] absolute bg-sky-800"></div>
        <div className="w-[215px] h-0.5 top-[25px] absolute bg-sky-600 z-30"></div>
      </div>
    </>
  );
};

export default LeftBarTitle;
