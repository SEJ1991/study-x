import Heading from "../text/Heading";

/**
 * 개요 템플릿 컴포넌트
 * @property {string} title 제목
 */
export default function Summary({ title }: Props) {
  return (
    <div>
      <Heading text={title} />
    </div>
  );
}

interface Props {
  title: string;
}
