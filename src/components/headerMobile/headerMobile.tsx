import React from "react";
import { ROUTES } from "../../global/const";
import Link from "next/link";
import Image from "next/image";
import styles from "./headerMobile.module.css";
import stylesDesktop from "./../headerDesktop/headerStyles.module.css";
import { HeaderMobileProps } from "@/interfaces/interfaces";

const HeaderMobile: React.FC<HeaderMobileProps> = ({
  openModal,
  setOpenModal,
}) => {
  const openMenu = () => {
    setOpenModal(!openModal);
  };
  return (
    <header className={styles.headerMobileContainer}>
      <article className={stylesDesktop.headerDesktopContainer_title}>
        <Link href={"/"}>
          <h1>
            FLIP CARD <br />
            GAME
          </h1>
        </Link>
        <span>!</span>
      </article>
      <nav>
        <Image
          onClick={openMenu}
          className={styles.headerMobileContainer_menuIcon}
          src={"/icons/responsive-menu-icon.png"}
          alt={"Icono de menú desplegable"}
          width={28}
          height={28}
        />
        {openModal && (
          <div className={styles.containerModal}>
            <div className={styles.containerModal_navbar}>
              <ul className={styles.containerModal_navbar_list}>
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
                })}{" "}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderMobile;
