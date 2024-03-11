import { useState } from 'react';

import PostFrame from 'components/common/frame/PostFrame';
import CountTest from './CountTest';
import CountSelectorTest from './CountSelectorTest';

/**
 * recoil의 atom, selector counter 예제
 * 두번째
 */
export default function BasicTest() {
  const [isShow, setIsShow] = useState(false);

  const handleSetIsShow = () => {
    setIsShow(prev => !prev);
  };

  return (
    <PostFrame title='atom & selector 예제'>
      <CountTest />
      <div>
        <button onClick={handleSetIsShow}>selector {isShow ? '숨기기' : '보이기'}</button>
      </div>
      {isShow && <CountSelectorTest />}
    </PostFrame>
  );
}
