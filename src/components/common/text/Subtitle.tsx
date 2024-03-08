import styles from "./Subtitle.module.scss";

/**
 * 부제목 컴포넌트
 * @property {string} text 부제목 텍스트
 */
export default function Subtitle({ text }: Props) {
  return <h2 className={styles.base}>{text}</h2>;
}

interface Props {
  text: string;
}
