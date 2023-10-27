"use client";

import useInput from "@/hooks/useInput";

const InputTime = () => {
  const [playTime, onChangePlayTimeHandler, setPlayTime] = useInput();
  return (
    <>
      <div className="w-12 h-8 px-[15px] py-2 mx-1 bg-white rounded-[3px] border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
        <input
          className="w-6 text-zinc-600 text-sm font-bold focus:outline-none disabled:shadow-none"
          value={playTime}
          onChange={onChangePlayTimeHandler}
        ></input>
      </div>
    </>
  );
};

export default InputTime;
