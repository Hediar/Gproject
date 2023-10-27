const NavButtons = () => {
  const buttons = ["대시보드", "서비스", "수집데이터", "이벤트", "시스템관리"];
  return (
    <>
      <div>
        {buttons.map((item, idx) => (
          <div
            key={idx}
            className="group flex-col items-center gap-[5px] inline-flex p-[20px]"
          >
            <div
              className={`text-center text-zinc-500 text-lg group-hover:cursor-pointer hover:text-neutral-700 ${
                idx === 2 ? "text-neutral-700" : ""
              }`}
            >
              {item}
              <div
                className={`w-auto h-[3px] bg-white group-hover:bg-sky-800 ${
                  idx === 2 ? "bg-sky-800" : ""
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NavButtons;
