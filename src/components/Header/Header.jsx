"use client";

import Link from "next/link";
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
          <img src="/img/logo.png" alt="logo" />
        </a>
        <div className={css.headerTextWrap}>
          
        <p className={css.headerTitle}>
            Офіційний дистриб'ютор компаній Semin та Knauf Ceiling Solutions
        </p>
        <address className={css.headerAddress}>
          <p>м. Київ, вул. Бережанська 4</p>
          <p>+38-044-499-59-36(37)</p>
          <p>+38-067-447-00-01</p>
          <p>+38-096-463-64-21</p>
          {/* <p>office@abg.com.ua</p> */}
        </address>
        </div>
        
      </div>

      <nav className={css.nav}>
        <Link className={buildLinkClass("/")} href="/">
          Про Компанію
        </Link>

        <Link className={buildLinkClass("/catalog")} href="/catalog">
          Каталог товарів
        </Link>

        <a className={css.link}>Прайси</a>

        {/* <a className={css.link}>
          Документація
        </a> */}

        <Link className={buildLinkClass("/contacts")} href="/contacts">
          Контакти
        </Link>
      </nav>
    </header>
  );
};

export default Header;
