import Header from "./Header";

import styles from "./Layout.module.scss";
const { base, main } = styles;

/**
 * 공통 layout 컴포넌트
 * @property {React.ReactNode} children 자식 컴포넌트
 */
export default function Layout({ children }: Props) {
  return (
    <div className={base}>
      <Header />
      <main className={main}>{children}</main>
    </div>
  );
}

interface Props {
  children: React.ReactNode;
}
