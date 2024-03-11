import styles from "./StepButton.module.scss";

/**
 * 주제 이전, 다음 버튼 컴포넌트
 * @property {string} text 문구
 * @property {function} onClick 클릭 함수
 * @property {boolean} disabled disabled 여부
 */
export default function StepButton({ text, onClick, disabled }: Props) {
  return (
    <button className={styles.base} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

interface Props {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled: boolean;
}
