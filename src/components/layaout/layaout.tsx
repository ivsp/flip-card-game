import { BREAKPOINT_DESKTOP } from "@/global/const";
import useWindowSize from "@/hooks/useWindowSize";
import React, { useState } from "react";
import HeaderMobile from "../headerMobile/headerMobile";
import HeaderDesktop from "../headerDesktop/headerDesktop";
import styles from "@/styles/Home.module.css";

function Layaout({ children }: { children: React.ReactNode }) {
  const size = useWindowSize();
  const [openModal, setOpenModal] = useState(false);
  return (
    <main className={styles.main}>
      {size <= BREAKPOINT_DESKTOP ? (
        <HeaderMobile openModal={openModal} setOpenModal={setOpenModal} />
      ) : (
        <HeaderDesktop />
      )}
      {children}
    </main>
  );
}

export default Layaout;
