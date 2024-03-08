import Navigator from "./Navigator";

import styles from "./Header.module.scss";

/**
 * 헤더 컴포넌트
 */
export default function Header() {
  return (
    <header className={styles.base}>
      <Navigator />
    </header>
  );
}
