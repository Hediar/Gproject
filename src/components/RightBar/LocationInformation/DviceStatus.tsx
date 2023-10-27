import { MiniDotLineDivider } from '@/styles/Dvider';
import { EllipseBlackIcon } from '@/styles/Icons';
interface Props {
  status: {
    name: string;
    date: string;
    runStatus: string;
    communication: string;
  };
}

const DviceStatus = ({ status }: Props) => {
  const title = ['단말 명칭', '설치일', '단말 운영상태', '단말 통신상태'];
  const content = [status.name, status.date, status.runStatus, status.communication];
  return (
    <>
      <div className="relative px-[20px] py-[25px]">
        <div className="flex items-center gap-1">
          <EllipseBlackIcon />
          <div className="text-zinc-600 text-sm">디바이스 상태</div>
        </div>
        <div className="w-[280px] pl-[16px] bg-white rounded-[3px] border border-zinc-200">
          {title.map((title, idx) => {
            return (
              <>
                <div key={idx} className="flex items-center py-[6px]">
                  <div className="text-zinc-500 text-[13px]">{title}</div>
                  <div className="absolute left-[130px] text-zinc-500 text-[13px] font-bold">{content[idx]}</div>
                </div>
                {idx === content.length - 1 ? null : <MiniDotLineDivider className="absolute left-5" />}
              </>
            );
          })}
        </div>
        <div className="flex space-x-1 absolute top-[185px] left-[90px]">
          <div className="w-5 h-[3px] bg-blue-500 rounded-sm" />
          <div className="w-5 h-[3px] bg-zinc-200 rounded-sm" />
          <div className="w-5 h-[3px] bg-zinc-200 rounded-sm" />
          <div className="w-5 h-[3px] bg-zinc-200 rounded-sm" />
          <div className="w-5 h-[3px] bg-zinc-200 rounded-sm" />
          <div className="w-5 h-[3px] bg-zinc-200 rounded-sm" />
        </div>
      </div>
    </>
  );
};

export default DviceStatus;
