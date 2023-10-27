import { WeathcerIcon } from '@/styles/Icons';
import DateTimeDisplay from './DateTimeDisplay';
import { DividerIcon } from '@/styles/Dvider';

const TodayInformation = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        {/* 현재시각 */}
        <div className="text-zinc-500 text-sm">
          현재시각 <DateTimeDisplay />
        </div>

        <div className="px-[20px]">
          <DividerIcon />
        </div>
        {/* 날씨 */}
        <div>
          <div className="text-zinc-500 text-sm">
            날씨
            <div className="flex">
              <div className="h-[23px] text-zinc-600 text-2xl font-medium flex items-center">
                21
                <div className="text-zinc-600 text-sm font-medium pr-[22px]">℃</div>
              </div>
            </div>
          </div>
        </div>
        <WeathcerIcon />
        <div className="px-[20px]">
          <DividerIcon />
        </div>
        {/* PM2.5 */}
        <div>
          <div className="text-zinc-500 text-sm">
            PM2.5
            <div className="flex items-center">
              <div className="h-[23px] text-zinc-600 text-2xl font-medium flex items-center gap-[10px]">
                27
                <div className="text-zinc-600 text-sm font-medium whitespace-nowrap">좋음</div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[20px]">
          <DividerIcon />
        </div>
        <div className=" px-[11px] py-[3px] text-sky-100 bg-blue-500 rounded-[3px] flex-col justify-start items-center gap-2.5 inline-flex">
          <div className="text-2xl font-bold font-['Roboto']">T</div>
        </div>
      </div>
    </>
  );
};

export default TodayInformation;
