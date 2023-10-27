import { LightBlueDivider } from '@/styles/Dvider';
import { MiniBlueCloseIcon } from '@/styles/Icons';

const RightBarBotton = () => {
  return (
    <>
      <div className="absolute top-[470px] px-[20px] py-[10px] bg-[#ebf6fc]">
        <MiniBlueCloseIcon className="absolute right-3 hover:cursor-pointer" />
        <div className="text-sky-600 font-bold">교차로 알리미 서비스</div>
        <div className="w-[295px] text-justify text-sky-600 text-[13px] leading-[18px]">
          어린이 보호 구역과 교차로 지역에 진입하는 차량 속도를 AI/IoT 기술을 활용하여 보행자 및 운전자 동시에 알려주는
          사고예방 안전서비스 입니다.
        </div>
        <LightBlueDivider className="absolute top-0 left-0" />
      </div>
    </>
  );
};

export default RightBarBotton;
