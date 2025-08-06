"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import clsx from "clsx";
import css from "./Header.module.css";

const Header = () => {
      const pathname = usePathname();

  const buildLinkClass = (href) =>
    clsx(css.link, pathname === href && css.active);

  return (
    <header className={css.header}>
      <div className={css.headerBox}>
        <a className={css.headerLogo} href="/">
          {/* Якщо в public/logo.png, то просто /logo.png */}
          <img src="/img/logo.png" alt="logo" />
        </a>
      </div>

      <nav className={css.nav}>
        <Link className={buildLinkClass ("/")} href="/">
          Про Компанію
        </Link>

        <Link className={buildLinkClass ("/catalog")} href="/catalog">
          Каталог товарів
        </Link>

        <Link className={buildLinkClass ("/contacts")} href="/contacts">
          Контакти
        </Link>
      </nav>
    </header>
  );
};

export default Header;
