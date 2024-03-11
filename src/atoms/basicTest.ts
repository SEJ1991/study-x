import { atom, atomFamily, selector } from "recoil";

/**
 * @description atom은 recoil의 데이터 상태 단위입니다.
 * 어디에서나 업데이트나 구독이 가능하고 해당 atom이 상태가 변경이 되면 구독한 컴포넌트에서는 재랜더링이 일어나게 됩니다.
 */
export const countState = atom({
  key: "countState",
  default: 0,
});

export const dummyCountState = atom({
  key: "dummyCountState",
  default: 0,
});

/**
 * @description selector는 readOnly한 상태를 말합니다.
 * get을 통해 atom을 구독할 수 있으며, 구독한 atom의 상태가 변경이되면 구독한 selector도 재랜더링이 일어나게 됩니다.
 * 또한 set을 통해 atom의 상태를 변경시킬 수도 있습니다.
 */
export const doubleCountSelector = selector({
  key: "doubleCountSelector",
  get: ({ get }) => {
    const count = get(countState);
    return count * 2;
  },
  // set: ({ set }, count) => {
  //   if (typeof count === "number") {
  //     const setCount = count + 100;
  //     set(dummyCountState, setCount);
  //   }
  // },
});

export const staticPlayerState = atom({
  key: "staticPlayerState",
  default: {
    id: 1,
    name: "sejin",
    age: 20,
  },
});

export const dynamicPlayerState = atomFamily({
  key: "dynamicPlayerState",
  default: (id) => ({
    id,
    name: "dynamic user",
    age: 2111,
  }),
});
