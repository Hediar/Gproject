import { getSmartCity } from '@/app/api/getData';
import CircleChart from './CircleChart';

const ChartBox = async () => {
  const data = await getSmartCity();
  const result = data.data.SmartCityService;

  return (
    <>
      {/* 1번 차트 */}
      <div key={1} className="w-[320px] h-[265px] bg-white rounded-[3px] border border-zinc-200">
        <div className="text-center text-zinc-600 text-sm font-bold pt-[15px]">{result[0].service}</div>
        <div className="absolute top-[230px] left-[115px] text-center text-zinc-600 text-sm font-bold">시설물등급</div>
        <div className="absolute top-[90px] left-[50px] z-0">
          <CircleChart chartdata={result[0].level} datacnt={5} />
        </div>
      </div>
      {/* 2번 차트 */}
      <div key={2} className="w-[320px] h-[265px] bg-white rounded-[3px] border border-zinc-200 mt-[20px]">
        <div className="text-center text-zinc-600 text-sm font-bold pt-[15px]">{result[1].service}</div>
        <div className="flex-col absolute top-[490px] left-[110px] text-center text-zinc-600 text-sm font-bold">
          어르신 <div>위험등급</div>
        </div>
        <div className="absolute top-[360px] left-[50px] z-0">
          <CircleChart chartdata={result[1].level} datacnt={5} />
        </div>
      </div>
      {/* 3번 차트 */}
      <div key={3} className="w-[320px] h-[265px] bg-white rounded-[3px] border border-zinc-200 mt-[20px] mb-[60px]">
        <div className="text-center text-zinc-600 text-sm font-bold pt-[15px]">{result[2].service}</div>
        <div className="flex-col absolute top-[780px] left-[110px] text-center text-zinc-600 text-sm font-bold">
          단말상태<div>총149개</div>
        </div>
        <div className="absolute top-[650px] left-[50px] z-0">
          <CircleChart chartdata={result[2].level} datacnt={8} />
        </div>
      </div>
    </>
  );
};

export default ChartBox;
