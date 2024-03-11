import Subtitle from "../text/Subtitle";
import styles from "./PostFrame.module.scss";

/**
 * 작성 템플릿 컴포넌트
 * @property {string} title 제목
 * @property {React.ReactNode} children 자식 컴포넌트
 */
export default function PostFrame({ title, children }: Props) {
  return (
    <section className={styles.base}>
      <Subtitle text={title} />
      {children}
    </section>
  );
}

interface Props {
  title: string;
  children: React.ReactNode;
}
