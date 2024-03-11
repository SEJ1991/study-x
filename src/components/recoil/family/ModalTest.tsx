import { useRecoilState } from 'recoil';

import { modalState } from 'atoms/famliyTest';
import styles from './ModalTest.module.scss';

const { base, button } = styles;

/**
 * atomFamily 테스트 컴포넌트
 * @property {string} modalName 모달명
 */
export default function ModalTest({ modalName }: Props) {
  const [modal, setModal] = useRecoilState(modalState({ name: modalName, status: false }));

  const handleOnClick = () => {
    setModal(prev => ({
      ...prev,
      status: !prev.status,
    }));
  };

  const { name, status } = modal;
  return (
    <div className={base}>
      <h4>모달명: {name}</h4>
      <span>상태: {status.toString()}</span>
      <button className={button} onClick={handleOnClick}>
        모달 상태 변경 !
      </button>
    </div>
  );
}

interface Props {
  modalName: string;
}
