import { DotLineDivider } from '@/styles/Dvider';

const StatusInfTitle = () => {
  return (
    <>
      <div className="w-[335px] h-[420px] bg-white rounded-[3px] shadow p-[20px]">
        <div className="w-[295px] h-[27px] relative">
          <div className="w-[283px] h-0.5 left-0 top-[25px] absolute opacity-50 bg-blue-500"></div>
          <div className="h-[27px] left-0 top-0 absolute flex-col justify-center items-start gap-[5px] inline-flex">
            <div className="text-zinc-600 text-lg font-bold">대상시설 및 단말 운영현황</div>
          </div>
          <div className="w-2.5 h-0.5 left-[285px] top-[25px] absolute bg-sky-800"></div>
          <div className="w-[215px] h-0.5 top-[25px] absolute bg-sky-600 z-30"></div>
        </div>
      </div>
      <div className="absolute inline-flex top-[640px] right-0 pr-[10px] text-zinc-600 text-[13px]">
        <div className="flex pr-[10px] gap-[2px]">
          <div className="w-[3px] h-[15px] bg-sky-600" />
          설치
        </div>
        <div className="flex pr-[10px] gap-[2px]">
          <div className="w-[3px] h-[15px] bg-orange-500" />
          상태알림
        </div>
        <div className="flex gap-[2px]">
          <div className="w-[3px] h-[15px] bg-violet-600" />
          이벤트
        </div>
        <DotLineDivider className="absolute top-[20px] -left-[170px]" />
      </div>
    </>
  );
};

export default StatusInfTitle;
