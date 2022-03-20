import { useState, useEffect } from "react";
/**
 * 커스텀훅 함수의 이름 첫 부분은 use 로 해야함.
 * 이 커스텀 훅을 쓰는 모든 컴포넌트들은 각자 자신의 상태를 갖는다.
 */
const useCounter = (increase = 1) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + increase);
    }, 1000);

    return () => clearInterval(interval);
  }, [increase]); //dependency 추가.

  return counter;
};

export default useCounter;
