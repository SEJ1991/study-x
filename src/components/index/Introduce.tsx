import Heading from "../common/text/Heading";
import styles from "./Introduce.module.scss";

const { base, p } = styles;

/**
 * index 소개 컴포넌트
 */
export default function Introduce() {
  return (
    <div className={base}>
      <Heading text="Hello, World!" />
      <p className={p}>스터디 웹페이지입니다.</p>
    </div>
  );
}
