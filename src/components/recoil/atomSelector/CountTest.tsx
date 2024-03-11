import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { countState } from 'atoms/basicTest';
import styles from './CountTest.module.scss';

const { base, wrapper, button } = styles;

/**
 * @description 읽기전용인 useRecoilValue를 사용하여 atom의 상태를 읽습니다. 보통 값을 읽을 필요만 있을 때 사용합니다.
 */
function ReadOnlyTest() {
  const count = useRecoilValue(countState);
  return <h4>READ ONLY COUNT: {count}</h4>;
}

/**
 * @description 쓰기전용인 useSetRecoilState를 사용하여 atom의 상태를 업데이트합니다.
 * atom의 상태를 구독하고 있지 않기 때문에 해당 컴포넌트는 countState의 값이 변경되어도 리렌더링이 되지 않습니다. 따라서 update하는 기능만 있는 컴포넌트에서는
 * useSetRecoilState를 쓰는 것이 좋습니다.
 */
function WriteOnlyTest() {
  const setCount = useSetRecoilState(countState);

  const handleSetCount = (number: number) => {
    setCount(prev => prev + number);
  };

  return (
    <>
      <button className={button} onClick={() => handleSetCount(1)}>
        증가
      </button>
      <button className={button} onClick={() => handleSetCount(-1)}>
        감소
      </button>
    </>
  );
}

/**
 * count atom test 컴포넌트
 * @description useRecoliState는 key와 set함수를 사용합니다. 따라서 읽고 쓰기가 필요할 때 사용합니다. 두번째
 */
export default function CountTest() {
  const [count, setCount] = useRecoilState(countState);

  const handleSetCount = (number: number) => {
    setCount(prev => prev + number);
  };

  return (
    <div className={base}>
      <h4>COUNT: {count}</h4>
      <div className={wrapper}>
        <button className={button} onClick={() => handleSetCount(1)}>
          증가
        </button>
        <button className={button} onClick={() => handleSetCount(-1)}>
          감소
        </button>
      </div>
      {/* <ReadOnlyTest />
      <WriteOnlyTest /> */}
    </div>
  );
}
