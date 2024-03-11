import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { doubleCountSelector, dummyCountState } from "atoms/basicTest";

/**
 * selector 의 set으로 인해 값이 변경된 atom을 나타내는 컴포넌트.
 */
function DummyCountTest() {
  const dummyCount = useRecoilValue(dummyCountState);

  return <h4>DUMMY COUNT: {dummyCount}</h4>;
}

/**
 * selector 예제 컴포넌트
 */
export default function CountSelectorTest() {
  const doubleSelector = useRecoilValue(doubleCountSelector);
  // const [doubleSelector, setDoubleSelector] =
  //   useRecoilState(doubleCountSelector);

  // useEffect(() => {
  //   setDoubleSelector(doubleSelector);
  // }, [doubleSelector]);

  return (
    <div>
      DOUBLE SELECTOR: {doubleSelector}
      <div>
        <DummyCountTest />
      </div>
    </div>
  );
}
