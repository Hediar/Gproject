import { VectorIcon } from '@/styles/Icons';
import React from 'react';
import LeftBarTitle from './LeftBarTitle';
import BottomDots from '../BottomDots';
import ChartBox from './Chart/ChartBox';

const LeftChartBar = () => {
  return (
    <>
      <div className="flex p-[20px] fixed top-20">
        <div className="w-[355px] bg-white rounded-[3px] shadow p-[20px]">
          <LeftBarTitle />
          <ChartBox />
          <div className="bg-inherit items-center absolute left-[175px] bottom-[35px]">
            <BottomDots />
          </div>
        </div>
        {/*지역 카테고리 */}
        <div className="px-5 py-2.5 ml-[15px] h-[36px] bg-white rounded-[3px] shadow justify-start items-center gap-[5px] inline-flex drop-shadow-lg">
          <div className="text-zinc-600 text-sm font-normal">구로구</div>
          <VectorIcon />
          <div className="text-zinc-600 text-sm font-normal">전체</div>
        </div>
      </div>
    </>
  );
};

export default LeftChartBar;
