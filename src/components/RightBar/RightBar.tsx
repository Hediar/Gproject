import React from 'react';
import TodayInformation from './TodayInformation';
import LocationInformationBox from './LocationInformation/LocationInformationBox';
import StatusInformation from './StatusInformation/StatusInformation';
import { CloseBlueIcone } from '@/styles/Icons';
import RightBarBotton from './RightBarBotton';

const RightBar = () => {
  return (
    <>
      <div className="fixed p-[20px] right-0 top-20 z-999">
        <div className="absolute top-4 right-[360px] px-[15px] py-2 bg-white rounded-[3px] justify-start items-center gap-5 drop-shadow-lg">
          <TodayInformation />
        </div>
        <div className="absolute top-0 right-3 pt-[15px]">
          <div className="w-[335px] h-[550px] bg-white rounded-[3px] shadow-lg">
            <LocationInformationBox />
            <div className="absolute top-1 -right-3 hover:cursor-pointer">
              <CloseBlueIcone />
            </div>
            <RightBarBotton />
          </div>
          <div className="w-[335px] bg-white rounded-[3px] shadow-lg my-[15px] ">
            <StatusInformation />
          </div>
        </div>
      </div>
    </>
  );
};

export default RightBar;
