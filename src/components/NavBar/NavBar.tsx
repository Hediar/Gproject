import { Logo, NavButton, RectengleButton } from '@/styles/Icons';
import React from 'react';
import NavButtons from './NavButtons';
import User from './User';

const NavBar = () => {
  return (
    <>
      <div className="flex relative h-20 items-center bg-white px-[30px] py-[21px] border border-gray-400 justify-between">
        <div className="flex items-center">
          <Logo />
          <div className="text-zinc-600 text-3xl font-bold px-2">스마트 도시 사업관리 시스템</div>
        </div>
        <NavButtons />
        <User />
        <div className="absolute top-[79px] left-1/2 z-10">
          <div className="hover:cursor-pointer">
            <NavButton />
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 z-90">
              <RectengleButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
