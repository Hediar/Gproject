import { getOperation } from '@/app/api/getData';
import StatusInfTitle from './StatusInfTitle';
import StatusMain from './StatusMain';
import BottomDots from '@/components/BottomDots';

const StatusInformation = async () => {
  const data = await getOperation();
  const result = data.data.operation;

  return (
    <>
      <StatusInfTitle />
      <StatusMain data={result} />
      <div className="bg-inherit items-center absolute left-[153px] bottom-[20px]">
        <BottomDots />
      </div>
    </>
  );
};

export default StatusInformation;
