import React from "react";
import { ROUTES } from "./../../global/const";
import Link from "next/link";
import styles from "./headerStyles.module.css";

const HeaderDesktop: React.FC = () => {
  return (
    <header className={styles.headerDesktopContainer}>
      <article className={styles.headerDesktopContainer_title}>
        <Link href={"/"}>
          <h1>
            FLIP CARD <br />
            GAME
          </h1>
        </Link>
        <span>!</span>
      </article>
      <nav>
        <ul className={styles.navbarDesktop}>
          {ROUTES.map((route) => {
            return (
              <Link
                key={route.label}
                href={route.value}
                className={styles.navbarDesktop__item}
              >
                <li>{route.label}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDesktop;
