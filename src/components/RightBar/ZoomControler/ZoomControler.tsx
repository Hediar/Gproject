'use client';
import React, { useState } from 'react';

interface Props {
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}

const ZoomControler = ({ level, setLevel }: Props) => {
  return (
    <>
      <div className="absolute top-[170px] right-[363px] bg-white shadow-lg">
        <div className="w-9 h-[200px] relative">
          <div className="w-1.5 h-[110px] left-[15px] top-[45px] absolute bg-zinc-200 rounded-[3px]"></div>
          <div className="w-1.5 h-[57px] left-[15px] top-[98px] absolute bg-blue-500 rounded-[3px]"></div>
          <div className="w-4 h-4 left-[10px] top-[90px] absolute bg-sky-600 rounded-full"></div>
          <div className="w-9 h-px left-0 top-[35px] absolute bg-neutral-300"></div>
          <div className="w-9 h-px left-0 top-[164px] absolute bg-neutral-300"></div>
          <button className="absolute text-2xl left-[10px] items-center" onClick={() => setLevel(level - 1)}>
            +
          </button>
          <button
            className="w-4 h-0.5 left-[10px] top-[181px] absolute bg-zinc-500"
            onClick={() => setLevel(level + 1)}
          ></button>
        </div>
      </div>
    </>
  );
};

export default ZoomControler;
