import { useEffect, useState } from "react";

function CurrentTimer() {
  const [currentTime, setCurrentTime] = useState({
    Hours: new Date(),
    minute: new Date(),
    secound: new Date(),
  });
  // const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());
  // const [currentSecond, setCurrentSecond] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentTime({Hours: new Date().getHours()})
        setCurrentTime({minute: new Date().getMinutes()})
        setCurrentTime({secound: new Date().getSeconds()})
    }, 1000)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-auto flex flex-wrap justify-evenly items-center">
    <div className="flex flex-col lg:flex-row  md:flex-row justify-around items-center  py-2 px-2 text-black timecont text-7xl bg-gradient-to-tr from-[#a619f8]/50 to-[#00f2fe]/50 rounded shadow-md shadow-black">
      <div className=" flex justify-center items-center w-[100%] h-[100%] py-4 px-6 lg:py-6 lg:px-6 lg:text-[90px]">{(currentTime.Hours >= 12)?`0${(currentTime.Hours - 12)}` : currentTime.Hours}</div>
      <span className="md:flex md:justify-center items-center mb-6 hidden text-[120px]">:</span>
      <span className="md:justify-center md:hidden text-[70px]">••</span>
      <div className="flex justify-center items-center w-[100%] h-[100%] py-4 px-6 lg:py-6 lg:px-6 lg:text-[90px]">{(currentTime.minute < 10)?`0${currentTime.minute}` : currentTime.minute}</div>
      <span className="md:flex md:justify-center items-center mb-6 hidden text-[120px]">:</span>
      <span className="flex md:justify-center  md:hidden text-[70px]">••</span>
      <div className="flex justify-center items-center w-[100%] h-[100%] py-4 px-6 lg:py-6 lg:px-6 lg:text-[90px]">{(currentTime.secound < 10)? `0${currentTime.secound}`: currentTime.secound}</div>
      <div className="flex justify-center items-center w-[100%] h-[100%] py-4 px-6 lg:py-6 lg:px-6 lg:text-[90px]">{(currentTime.Hours >= 12)? `PM`: 'AM'}</div>
    </div>
    </div>
  );
}

export default CurrentTimer;
