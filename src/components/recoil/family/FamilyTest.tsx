import PostFrame from 'components/common/frame/PostFrame';
import ModalTest from './ModalTest';
import MoneyTest from './MoneyTest';

/**
 * atomFamily & selectorFamily 예제
 */
export default function FamilyTest() {
  return (
    <PostFrame title='atomFamily & selectorFamily 예제'>
      <ModalTest modalName='A모달' />
      <ModalTest modalName='B모달' />
      <MoneyTest country='US' />
      <MoneyTest country='JP' />
    </PostFrame>
  );
}
