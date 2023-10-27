import {
  DangerAlarmButtonIcon,
  DaycareAlarmButtonIcon,
  ElderlySafeButtonIcon,
  IntersectAlarmButtonIcon,
  SmartSecurityServiceButtonIcon,
  TurnRightAlarmButtonIcon
} from '@/styles/ButtomServiceIcons';
import { ClockIcon, CloseGrayButtonIcone, PlayIcon } from '@/styles/Icons';
import InputTime from './InputTime';

const BottomBar = () => {
  const servicesWithIcons = {
    '위험시설물 예・경보 알림 서비스': DangerAlarmButtonIcon,
    '교차로 알리미 서비스': IntersectAlarmButtonIcon,
    '우회전 알리미 서비스': TurnRightAlarmButtonIcon,
    '홀몸어르신 안심 서비스': ElderlySafeButtonIcon,
    '어린이집 알림 서비스': DaycareAlarmButtonIcon,
    '특수학교 알림 서비스': DaycareAlarmButtonIcon,
    '스마트 보안등 서비스': SmartSecurityServiceButtonIcon
  };
  return (
    <>
      <div className="fixed bottom-0 left-1/3">
        {/* 도시 서비스 선택 버튼 */}

        <div className="inline-flex w-[177px] h-10 px-1.5 py-[5px] bg-white rounded-[30px] border border-neutral-300 justify-start items-center gap-2.5 absolute left-1/3 -top-11 hover:cursor-pointer">
          <div className="flex items-center gap-1">
            <PlayIcon />
            <div className="text-zinc-600 text-base font-bold">도시 서비스 선택</div>
          </div>
        </div>
        {/* 서비스 목록 */}
        <div className="w-[650px] h-[186px] p-[15px] bg-white rounded-tl-[5px] rounded-tr-[5px] shadow-lg justify-start items-center">
          {/* BottomBar 닫기 */}
          <button className="absolute -right-3 -top-3 hover:cursor-pointer">
            <CloseGrayButtonIcone />
          </button>
          <div className="flex flex-wrap justify-between">
            {Object.entries(servicesWithIcons).map(([service, IconComponent], idx) => (
              <div
                key={service}
                className={`w-auto flex items-center gap-1 text-sm font-bold pb-[15px] hover:cursor-pointer ${
                  idx === 1 ? 'text-sky-600' : 'text-zinc-600'
                }`}
              >
                <IconComponent /> {/* 아이콘 컴포넌트 */}
                <span>{service}</span> {/* 서비스 내용 */}
              </div>
            ))}
          </div>
        </div>
        {/* 재생시간 */}
        <div className="flex justify-start items-center absolute bottom-[10px] right-[10px] w-[243px] h-[55px] bg-slate-100 rounded-[3px] border border-neutral-300 text-zinc-600 text-sm">
          <div className="flex items-center">
            <ClockIcon />
            <div>재생시간</div>
            <InputTime />
            <div>분</div>
            {/* 저장버튼 */}
            <button className="flex px-2.5 py-[5px] mx-1 bg-white rounded-[3px] border border-gray-400 justify-start items-center">
              <div className="text-gray-400 text-sm font-bold">저장</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomBar;
