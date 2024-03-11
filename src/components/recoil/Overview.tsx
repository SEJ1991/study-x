import ListFrame from 'components/common/frame/ListFrame';
import PostFrame from 'components/common/frame/PostFrame';

/**
 * recoil 개요 컴포넌트
 * 첫번째
 */
export default function Overview() {
  return (
    <PostFrame title="Meta에서 만든 '리액트 전용' 글로벌 상태관리 라이브러리입니다.">
      <ListFrame title='장점' list={BENEFIT_LIST} />
      <ListFrame title='단점' list={WEAK_LIST} />
      <a href='https://medium.com/@clockclcok/recoil-%EC%9D%B4%EC%A0%9C%EB%8A%94-%EB%96%A0%EB%82%98-%EB%B3%B4%EB%82%BC-%EC%8B%9C%EA%B0%84%EC%9D%B4%EB%8B%A4-ff2c8674cdd5'>
        Recoil, 이제는 떠나 보낼 시간이다
      </a>
    </PostFrame>
  );
}

const BENEFIT_LIST = [
  'useState 사용 하듯이 간편하게 사용할 수 있습니다.',
  '리덕스와는 달리 상태를 분할하기가 편리합니다.',
  'React의 동시성 모드를 지원합니다.',
];

const WEAK_LIST = [
  '리덕스 데브툴스 같은 툴이 없어서 상태 관측이 불편합니다.',
  '버전 업데이트가 늦습니다. (릴리즈 된지 몇년이 되었지만 아직까지 메이저 버전이 0점대...)',
  '코어 개발자의 정리해고로 인한 라이브러리 전망에 대한 불확실합니다.',
];
