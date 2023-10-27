import { EllipseBlueIcon } from '@/styles/Icons';

interface Props {
  location: number[];
}

const SetLocation = ({ location }: Props) => {
  const title = ['위도', '경도', '고도(m)'];
  return (
    <>
      <div className="px-[20px] pt-[25px]">
        <div className="flex items-center gap-1">
          <EllipseBlueIcon />
          <div className="text-zinc-600 text-sm font-bold">설치위치</div>
        </div>
        {location.map((data, idx) => {
          return (
            <>
              <div key={idx} className="flex items-center py-[6px]">
                <div className="z-10 px-2 py-1 bg-white rounded-[10.50px] border border-neutral-300 items-start gap-2.5">
                  <div className="text-zinc-600 text-[13px]">{title[idx]}</div>
                </div>
                <div className="absolute w-[125px] h-px bg-neutral-300 " />
                <div className="absolute left-[130px] px-[15px] py-1 bg-slate-100 rounded-[10.50px] border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                  <div className="text-neutral-700 text-sm font-light leading-[14px]">{data}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SetLocation;
