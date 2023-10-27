"use client";
import React, { useState, useEffect } from "react";

function DateTimeDisplay() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // 시각 포맷 (15:26:43)
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const timeString = `${hours}:${minutes}:${seconds}`;

      // 날짜 포맷 (2021.03.26)
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const dateString = `${year}.${month}.${day}`;

      setCurrentTime(timeString);
      setCurrentDate(dateString);
    };

    const intervalId = setInterval(updateDateTime, 1000); // 1초마다 갱신

    // 컴포넌트가 언마운트되면 타이머 정리
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex">
      <div className="h-[23px] text-zinc-600 text-2xl font-medium flex items-center gap-[10px]">
        {currentTime}
        <div className="text-zinc-600 text-sm font-medium">{currentDate}</div>
      </div>
    </div>
  );
}

export default DateTimeDisplay;
