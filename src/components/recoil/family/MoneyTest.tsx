import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { unitState } from 'atoms/famliyTest';
import styles from './MoneyTest.module.scss';

const { base, input_style } = styles;

/**
 * selectorFamily 예제 컴포넌트
 * @property {'US' | 'JP'} country 국가
 */
export default function MoneyTest({ country }: Props) {
  const [input, setInput] = useState(0);
  const [money, setMoney] = useRecoilState(unitState(country));

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    !isNaN(value) && setInput(Number(value));
  };

  const handleOnBlur = () => {
    setMoney(input);
  };

  return (
    <div className={base}>
      <input
        className={input_style}
        value={input}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        placeholder='원'
      />
      <span>환산금액: {`${money} ${country}`}</span>
    </div>
  );
}

interface Props {
  country: 'US' | 'JP';
}
