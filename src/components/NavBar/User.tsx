const User = () => {
  return (
    <>
      <div className="flex items-center">
        <div>
          <div className="text-zinc-500 text-xs font-normal">
            IP: 256.23.123.89
          </div>
          <div>
            <span className="text-sky-600 text-base font-normal">관리자</span>
            <span className="text-sky-600 text-base font-bold"> 홍길동</span>
          </div>
        </div>
        <div className="text-zinc-500 text-sm font-normal pl-[39px] hover:cursor-pointer">
          로그아웃
        </div>
      </div>
    </>
  );
};

export default User;
