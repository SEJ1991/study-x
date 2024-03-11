import styles from "./ListFrame.module.scss";

const { base, h3, ul, li } = styles;

/**
 * list 형태의 공통 컴포넌트
 * @property {string} title 제목
 * @property {string[]} list 목록
 */
export default function ListFrame({ title, list }: Props) {
  return (
    <div className={base}>
      <h3 className={h3}>{title}</h3>
      <ul className={ul}>
        {list.map((value) => (
          <li key={value} className={li}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface Props {
  title: string;
  list: string[];
}
