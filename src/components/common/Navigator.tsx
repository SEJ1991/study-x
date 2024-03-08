import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./Navigator.module.scss";
const { base, ul, li, active_li } = styles;

/**
 * 페이지 이동 네비게이터 컴포넌트
 */
export default function Navigator() {
  const { pathname } = useLocation();
  const title = PAGE_LIST.find(({ to }) => pathname === to)?.name;

  useEffect(() => {
    if (title) {
      document.title = `Study-x | ${title}`;
    }
  }, [pathname]);

  return (
    <nav className={base}>
      <ul className={ul}>
        {PAGE_LIST.map(({ name, to }) => (
          <li key={name} className={`${li} ${title === name ? active_li : ""}`}>
            <Link to={to}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const PAGE_LIST = [
  {
    name: "Index",
    to: "/",
  },
  {
    name: "Recoil",
    to: "/recoil",
  },
];
