import StepButton from "../button/StepButton";
import styles from "./StepButtonFrame.module.scss";

/**
 * 작성 템플릿 하단 버튼 프레임 컴포넌트
 * @property {function} prevFunc 이전 클릭 함수
 * @property {function} nextFunc 다음 클릭 함수
 * @property {boolean} prevDisabled 이전 버튼 disabled 여부
 * @property {boolean} nextDisabled 다음 버튼 disabled 여부
 */
export default function StepButtonFrame({
  prevFunc,
  nextFunc,
  prevDisabled,
  nextDisabled,
}: Props) {
  return (
    <div className={styles.base}>
      <StepButton text="Prev" onClick={prevFunc} disabled={prevDisabled} />
      <StepButton text="Next" onClick={nextFunc} disabled={nextDisabled} />
    </div>
  );
}

interface Props {
  prevFunc: () => void;
  nextFunc: () => void;
  prevDisabled: boolean;
  nextDisabled: boolean;
}
