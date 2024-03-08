import styles from "./Heading.module.scss";

/**
 * h1 공통 컴포넌트
 * @property {string} text 헤딩 텍스트
 */
export default function Heading({ text }: Props) {
  return <h1 className={styles.base}>{text}</h1>;
}

interface Props {
  text: string;
}
