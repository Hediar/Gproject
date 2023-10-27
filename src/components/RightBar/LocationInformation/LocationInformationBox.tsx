import { getLocation } from '@/app/api/getData';
import LocationHeader from './LocationHeader';
import SetLocation from './SetLocation';
import DviceStatus from './DviceStatus';

const LocationInformationBox = async () => {
  const data = await getLocation();
  const result = data.data.location[0];
  return (
    <>
      <div>
        <LocationHeader title={result.location} address={result.address} />
      </div>
      <SetLocation location={result.installLocation} />
      <DviceStatus status={result.deviceStatus} />
    </>
  );
};

export default LocationInformationBox;
