import { EllipseBlueIcon } from '@/styles/Icons';
import { DotLineDivider, LineDivider } from '@/styles/Dvider';

interface Props {
  data: OperationData[];
}

const StatusMain = ({ data }: Props) => {
  return (
    <>
      <div className="absolute top-[660px]">
        <div className="px-[20px]">
          {data?.map((data, idx) => {
            return (
              <div key={idx} className="relative">
                <div className="flex items-center gap-1 text-zinc-600 text-sm font-bold pt-[15px]">
                  <EllipseBlueIcon />
                  {data.service}
                </div>
                <div className="text-zinc-600 text-[13px]">
                  <div className="flex items-center justify-between px-1 mt-1">
                    <div>대상시설</div>
                    <div className="flex items-center absolute left-[102px]">
                      <div className="text-right text-sky-600 text-lg font-medium">{data.target[0]}</div>개소
                    </div>
                    <div className="flex items-center">
                      <div className="absolute right-[68px] text-right text-orange-500 text-lg font-medium">
                        {data.target[1]}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="absolute right-2 text-right text-violet-600 text-lg font-medium">
                        {data.target[2]}
                      </div>
                    </div>
                  </div>
                  <LineDivider />
                  <div>
                    <div className="flex items-center justify-between px-1 pb-1">
                      <div className="mr-[15px]">단말기</div>
                      <div className="flex items-center">
                        <div className="text-right text-sky-600 text-lg font-medium ">{data.terminal[0]}</div>개
                      </div>
                      <div className="flex items-center">
                        <div className="text-right text-orange-500 text-lg font-medium">{data.terminal[1]}</div>
                      </div>
                      <div className="flex items-center">
                        <div className="text-right text-violet-600 text-lg font-medium">{data.terminal[2]}</div>
                      </div>
                    </div>
                  </div>
                  <DotLineDivider className="absolute bottom-0 -left-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StatusMain;
