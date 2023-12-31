import { useState, useEffect } from "react";
function useTime() {
    const [currentTime, setCurrentTime] = useState({
        Hours: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
      });

      useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime({Hours: new Date().getHours(), minute: new Date().getMinutes(), second: new Date().getSeconds()})
        }, 1000)
        return () => clearInterval(interval);
      }, []);

      return {currentTime};
}

export default useTime;