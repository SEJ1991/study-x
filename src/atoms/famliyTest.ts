import { atom, atomFamily, selectorFamily } from 'recoil';

/**
 * @description atomFamily는 매개변수를 직접 전달 받아 default에 값을 업데이트 할 수 있으며,
 * 혹은 모달 같은 true or false의 값만 가지고 있고 여러 모달을 사용해야 할 때 이 하나의 atomFamily로 컨트롤 할 수 있다
 */
export const modalState = atomFamily<
  { name: string; status: boolean },
  { name: string; status: boolean }
>({
  key: 'modalState',
  default: ({ name, status }) => ({
    name,
    status,
  }),
});

const moneyState = atom({
  key: 'money',
  default: 0,
});

export const unitState = selectorFamily({
  key: 'unitState',
  get:
    country =>
    ({ get }) => {
      const won = get(moneyState);
      const newValue = won / (country === 'US' ? 1200 : 900);
      // console.log({ country, won, newValue });
      return newValue;
    },
  set:
    country =>
    ({ set }, newVal) => {
      if (typeof newVal === 'number') {
        // const upstateWon = newVal / (country === 'US' ? 1200 : 900)
        // console.log({ country, newVal });
        set(moneyState, newVal);
      }
    },
});
