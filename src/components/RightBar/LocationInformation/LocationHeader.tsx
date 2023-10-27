import { BlueDivider } from "@/styles/Dvider";

interface Props {
  title: string;
  address: string;
}

const LocationHeader = ({ title, address }: Props) => {
  return (
    <>
      <div className="p-[10px] flex">
        <div className="w-[5px] h-11 bg-sky-600" />
        <div className="flex-wrap pl-[5px]">
          <div className="text-neutral-700 text-lg font-bold">{title}</div>
          <div className="text-zinc-600 text-[13px]">{address}</div>
        </div>
      </div>
      <BlueDivider />
    </>
  );
};

export default LocationHeader;
